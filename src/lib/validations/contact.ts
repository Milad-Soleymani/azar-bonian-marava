import { z } from "zod";

export const contactSchema = (t: (key: string) => string) =>
  z.object({
    firstname: z
      .string()
      .min(2, {
        message: t("validation.firstname"),
      }),

    lastname: z
      .string()
      .min(2, {
        message: t("validation.lastname"),
      }),

    email: z
      .string()
      .email({
        message: t("validation.email"),
      }),

    phone: z
      .string()
      .min(8, {
        message: t("validation.phone"),
      }),

    service: z
  .string({
    error: t("validation.service"),
  })
  .min(1, t("validation.service")),

    message: z
      .string()
      .min(10, {
        message: t("validation.message"),
      }),
  });


export type ContactFormData = z.infer<
  ReturnType<typeof contactSchema>
>;