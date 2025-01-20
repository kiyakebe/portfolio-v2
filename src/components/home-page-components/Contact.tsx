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

import Image from "next/image";
import { toast } from "react-toastify";

import axios from "axios";

const services = [
  { value: "web", label: "Web Development" },
  { value: "design", label: "UI/UX Design" },
  { value: "content", label: "Content Writing" },
  { value: "marketing", label: "Digital Marketing" },
];

export default function Contact() {

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
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
    <section className="lg:container mx-auto  px-4 sm:px-6 lg:px-8 md:py-24 md:lg:py-24 lg:max-w-[1440px]">
      <div className="grid lg:grid-cols-2 gap-12 p-6">
        <div className="bg-slate-50 dark:bg-[#1a1528] p-8 rounded-2xl">
          <div className="mb-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#834EF0] to-[#4d279a] dark:to-[#ECE3FE]  text-transparent bg-clip-text">
              Let's work together!
            </h2>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="First name"
                          className="bg-transparent py-6 border-violet-900 focus-visible:ring-violet-600 transition-all duration-200"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Last name"
                          className="bg-transparent py-6 border-violet-900 focus-visible:ring-violet-600"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email address"
                          className="bg-transparent py-6 border-violet-900 focus-visible:ring-violet-600"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Phone number"
                          className="bg-transparent py-6 border-violet-900 focus-visible:ring-violet-600"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
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
                        <SelectTrigger className="w-full py-6 bg-transparent border-violet-900 focus:ring-violet-600">
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
                        className="bg-transparent border-violet-900 focus-visible:ring-violet-600 min-h-[160px]"
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

        {/* Contact Info Section */}
        <div className="flex flex-col p-6 justify-center gap-8">
          <Image
            src="/placeholder.png?height=600&width=600"
            alt="Expert Blog"
            width={600}
            height={400}
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
