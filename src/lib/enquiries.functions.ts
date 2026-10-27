import { createServerFn } from "@tanstack/react-start";
import { enquirySchema } from "./enquiry-schema";

type Result = { ok: true } | { ok: false; error: string };

// Public endpoint: validates on the server, blocks spam and rapid repeats.
export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => input)
  .handler(async ({ data }): Promise<Result> => {
    const parsed = enquirySchema.safeParse(data);
    if (!parsed.success) {
      return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };
    }
    const v = parsed.data;
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Rate limit: max 3 enquiries per email per hour; block exact duplicates within 10 min.
    const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { data: recent, error: rErr } = await supabaseAdmin
      .from("enquiries")
      .select("program, created_at")
      .ilike("email", v.email)
      .gte("created_at", since);
    if (rErr) {
      console.error("enquiry rate check failed", rErr);
      return { ok: false, error: "Something went wrong. Please try again." };
    }
    if ((recent?.length ?? 0) >= 3) {
      return { ok: false, error: "Too many enquiries. Please try again later." };
    }
    const tenMin = Date.now() - 10 * 60 * 1000;
    if (recent?.some((r) => r.program === v.program && new Date(r.created_at).getTime() > tenMin)) {
      return { ok: false, error: "We already received this enquiry. Our team will be in touch." };
    }

    const { error } = await supabaseAdmin.from("enquiries").insert({
      full_name: v.full_name,
      email: v.email.toLowerCase(),
      phone: v.phone,
      program: v.program,
      background: v.background || null,
      message: v.message || null,
    });
    if (error) {
      console.error("enquiry insert failed", error);
      return { ok: false, error: "Something went wrong. Please try again." };
    }
    return { ok: true };
  });
