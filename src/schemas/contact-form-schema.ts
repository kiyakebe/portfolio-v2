import * as z from "zod"

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string({
    required_error: "Please select a service",
  }),
  message: z.string().min(1, "Message must be at least 1 characters"),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

