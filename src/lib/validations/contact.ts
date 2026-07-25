import { z } from "zod";

export const contactSchema = z.object({
  firstname: z
    .string()
    .min(2, "First name must be at least 2 characters"),

  lastname: z
    .string()
    .min(2, "Last name must be at least 2 characters"),

  email: z
    .string()
    .email("Invalid email address"),

  phone: z
    .string()
    .min(8, "Invalid phone number"),

  service: z
    .string()
    .min(1, "Please select a service"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters"),
});


export type ContactFormData = z.infer<typeof contactSchema>;