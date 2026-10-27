import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

// UI hint only — every admin read/write is enforced by database row-level security.
export function useIsAdmin(userId: string) {
  return useQuery({
    queryKey: ["is-admin", userId],
    queryFn: async () => {
      const { data, error } = await supabase.rpc("has_role", { _user_id: userId, _role: "admin" });
      if (error) throw error;
      return data === true;
    },
  });
}
