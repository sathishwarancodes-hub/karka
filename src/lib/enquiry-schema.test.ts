import { describe, it, expect } from "vitest";
import { enquirySchema } from "./enquiry-schema";

const base = {
  full_name: "Alex Turner",
  email: "alex@example.com",
  phone: "+91 94875 30243",
  program: "AI & Machine Learning",
};

describe("enquiry validation", () => {
  it("accepts a valid enquiry", () => {
    expect(enquirySchema.safeParse(base).success).toBe(true);
  });
  it("rejects an invalid email", () => {
    expect(enquirySchema.safeParse({ ...base, email: "nope" }).success).toBe(false);
  });
  it("rejects an invalid phone", () => {
    expect(enquirySchema.safeParse({ ...base, phone: "abc" }).success).toBe(false);
  });
  it("rejects unknown programs", () => {
    expect(enquirySchema.safeParse({ ...base, program: "Cooking" }).success).toBe(false);
  });
  it("rejects messages over 2000 characters", () => {
    expect(enquirySchema.safeParse({ ...base, message: "a".repeat(2001) }).success).toBe(false);
  });
  it("rejects filled honeypot", () => {
    expect(enquirySchema.safeParse({ ...base, website: "spam.com" }).success).toBe(false);
  });
});
