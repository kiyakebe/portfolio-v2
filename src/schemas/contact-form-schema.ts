import * as z from "zod"

export const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string({
    required_error: "Please select a service",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

