"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  contactFormSchema,
  type ContactFormValues,
} from "@/schemas/contact-form-schema";

import { toast } from "react-toastify";

import axios from "axios";
import { Mail, Phone } from "lucide-react";

const services = [
  { value: "fd", label: "Frontend Development" },
  { value: "bd", label: "Backend Development" },
  { value: "web", label: "Web Development" },
  { value: "design", label: "UI/UX Design" },
  { value: "pm", label: "Product Management" },
  { value: "Other", label: "Other" },
];

export default function Contact() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const toast_error = (message: string) =>
    toast.error(message, { theme: "colored" });

  const toast_success = (message: string) =>
    toast.success(message, { theme: "colored" });

  async function onSubmit(data: ContactFormValues) {
    try {
      const res = await axios.post("/api/sendEmail", {
        body: data,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (res.status == 200) {
        toast_success(
          "We've received your message and will get back to you soon."
        );
        form.reset();
      } else {
        toast_error(
          "An error occurred while sending your message. Please try again later."
        );
      }
    } catch (error) {
      toast_error(
        "An error occurred while sending your message. Please try again later."
      );
    }
  }

  return (
    <section
      id="contact"
      className="lg:container mx-auto mt-8 px-4 sm:px-6 lg:px-8 md:py-24 md:lg:py-24 lg:max-w-[1440px]"
    >
      <div className="grid lg:grid-cols-3 gap-12 p-6">
        <div className="lg:col-span-2 border p-8 rounded-lg">
          <div className="mb-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#834EF0] to-[#4d279a] dark:to-[#ECE3FE]  text-transparent bg-clip-text">
              Let's work together!
            </h2>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Full name"
                        className="bg-transparent py-6 focus-visible:ring-violet-600 transition-all duration-200"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email address"
                        className="bg-transparent py-6 focus-visible:ring-violet-600"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full py-6 bg-transparent focus:ring-violet-600">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Message"
                        className="bg-transparent focus-visible:ring-violet-600 min-h-[160px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full md:w-auto group bg-gradient-to-r from-[#834EF0] to-[#4d279a] text-white"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>

        {/* <div className="bg-[url('/patterns/contact.png')] bg-cover bg-center flex flex-col border p-6 pt-28 gap-8 rounded-lg overflow-hidden"> */}
        <div className="bg-cover bg-center relative flex flex-col border p-6 pt-28 gap-8 rounded-lg overflow-hidden">
          <div className="flex gap-4 items-center">
            <div className="flex bg-gradient-to-r from-[#834EF0] to-[#4d279a] text-white p-3 aspect-square rounded-full items-center justify-center">
              <Mail className="" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <a
                href="mailto:kiyakebe799@gmail.com"
                className="text-[#834EF0] underline tracking-wide"
              >
                kiyakebe799@gmail.com
              </a>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="flex bg-gradient-to-r from-[#834EF0] to-[#4d279a] text-white p-3 aspect-square rounded-full items-center justify-center">
              <Phone className="" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <a
                href="tel:+251941709090"
                className="text-[#834EF0] underline tracking-wide"
              >
                +251941709090
              </a>
            </div>
          </div>
          <div className="absolute right-12 top-0 bottom-0 border-r border-2 border-dashed border-white/20 -z-5"></div>
          <div className="absolute left-0 right-0 bottom-12 border-b border-2 border-dashed border-white/20 -z-5"></div>
          <div className="absolute -bottom-20 -right-20 w-[240px] h-[200px] rounded-full bg-[#20529a]/10 blur-[60px] mix-blend-soft-light -z-5"></div>
          <div className="absolute -bottom-20 -right-20 w-[400px] h-80 rounded-full bg-[#34b2bf]/15 blur-[40px] mix-blend-screen -z-5"></div>
        </div>
      </div>
    </section>
  );
}
