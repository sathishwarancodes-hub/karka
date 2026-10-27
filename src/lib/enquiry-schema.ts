import { z } from "zod";

export const PROGRAMS = [
  "AI & Machine Learning",
  "Data Science & Analytics",
  "Full-Stack Development",
  "Python Programming",
  "Cloud Computing & DevOps",
  "Emerging Technologies",
] as const;

export const ENQUIRY_STATUSES = ["new", "in_progress", "contacted", "closed"] as const;
export type EnquiryStatus = (typeof ENQUIRY_STATUSES)[number];

export const enquirySchema = z.object({
  full_name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s\-()]{7,20}$/, "Please enter a valid phone number"),
  program: z.enum(PROGRAMS),
  background: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
  // Honeypot: real visitors never fill this hidden field.
  website: z.string().max(0, "Spam detected").optional().default(""),
});

export type EnquiryInput = z.input<typeof enquirySchema>;
