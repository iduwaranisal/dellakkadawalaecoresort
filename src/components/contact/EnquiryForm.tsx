"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const enquiryFormSchema = z.object({
  name: z.string().min(2, "Please enter your name (at least 2 letters)"),
  phone: z.string().min(8, "Please enter a valid phone number (e.g. +94 7X XXX XXXX)"),
  visitDate: z.string().min(1, "Please choose your desired visit date"),
  guests: z.string().min(1, "Please enter the number of guests"),
  visitType: z.enum(["Day Out", "Stay", "Group Gathering"], {
    message: "Please select the type of visit",
  }),
  message: z.string().optional(),
  company: z.string().max(0).optional(), // Honeypot field
});

type EnquiryFormData = z.infer<typeof enquiryFormSchema>;

export function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      visitType: "Day Out",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setServerMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setServerMessage(result.message);
        reset();
      } else {
        setSubmitStatus("error");
        setServerMessage(result.message || "Failed to send. Please call us directly.");
      }
    } catch {
      setSubmitStatus("error");
      setServerMessage("Network error. Please call us directly at +94 71 180 6801.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#DDE5DD]/20 shadow-2xl relative">
      <div className="mb-8">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F1E6]">
          Send an Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-[#A9BC95] mt-1">
          Tell us about your plans. We will contact you quickly to confirm details.
        </p>
      </div>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 flex items-start gap-3 text-emerald-200 text-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-white">Enquiry Sent Successfully!</p>
            <p className="text-xs text-emerald-300 mt-1">{serverMessage}</p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 rounded-2xl bg-rose-950/80 border border-rose-500/50 flex items-start gap-3 text-rose-200 text-sm">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-white">Unable to send enquiry</p>
            <p className="text-xs text-rose-300 mt-1">{serverMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Hidden Honeypot Field */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("company")}
          />
        </div>

        {/* Row 1: Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-[#DDE5DD]/90">
              Your Name <span className="text-[#C9A84C]">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Kasun Perera"
              className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-[#F5F1E6] placeholder-[#DDE5DD]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] ${
                errors.name ? "border-rose-400" : "border-white/15"
              }`}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-[11px] text-rose-400">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-[#DDE5DD]/90">
              Phone Number <span className="text-[#C9A84C]">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="e.g. +94 71 180 6801"
              className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-[#F5F1E6] placeholder-[#DDE5DD]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] ${
                errors.phone ? "border-rose-400" : "border-white/15"
              }`}
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-[11px] text-rose-400">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Row 2: Visit Date & Number of Guests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label htmlFor="visitDate" className="text-xs font-semibold uppercase tracking-wider text-[#DDE5DD]/90">
              Intended Visit Date <span className="text-[#C9A84C]">*</span>
            </label>
            <input
              id="visitDate"
              type="date"
              className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-[#F5F1E6] placeholder-[#DDE5DD]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] ${
                errors.visitDate ? "border-rose-400" : "border-white/15"
              }`}
              {...register("visitDate")}
            />
            {errors.visitDate && (
              <p className="text-[11px] text-rose-400">{errors.visitDate.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="guests" className="text-xs font-semibold uppercase tracking-wider text-[#DDE5DD]/90">
              Number of Guests <span className="text-[#C9A84C]">*</span>
            </label>
            <input
              id="guests"
              type="text"
              placeholder="e.g. 4 adults, 2 kids"
              className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-[#F5F1E6] placeholder-[#DDE5DD]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] ${
                errors.guests ? "border-rose-400" : "border-white/15"
              }`}
              {...register("guests")}
            />
            {errors.guests && (
              <p className="text-[11px] text-rose-400">{errors.guests.message}</p>
            )}
          </div>
        </div>

        {/* Row 3: Type of Visit */}
        <div className="space-y-1.5">
          <label htmlFor="visitType" className="text-xs font-semibold uppercase tracking-wider text-[#DDE5DD]/90">
            Type of Visit <span className="text-[#C9A84C]">*</span>
          </label>
          <select
            id="visitType"
            className="w-full px-4 py-3 rounded-xl bg-[#071F1A] border border-white/15 text-sm text-[#F5F1E6] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]"
            {...register("visitType")}
          >
            <option value="Day Out">Day Out (River Bathing & Kayaking)</option>
            <option value="Stay">Stay (Overnight Room Booking)</option>
            <option value="Group Gathering">Group Gathering (Family / Friends / Office)</option>
          </select>
          {errors.visitType && (
            <p className="text-[11px] text-rose-400">{errors.visitType.message}</p>
          )}
        </div>

        {/* Row 4: Message */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-[#DDE5DD]/90">
            Any Special Requests or Questions
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Tell us if you need barbecue arrangements, dietary preferences, or specific arrival times..."
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-[#F5F1E6] placeholder-[#DDE5DD]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]"
            {...register("message")}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full justify-center"
            icon={
              isSubmitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )
            }
          >
            {isSubmitting ? "Sending..." : "Submit Enquiry"}
          </Button>
        </div>

        <p className="text-[11px] text-center text-[#DDE5DD]/60">
          Prefer an immediate reply? Call us directly at{" "}
          <a href="tel:+94711806801" className="text-[#C9A84C] hover:underline">
            +94 71 180 6801
          </a>
        </p>
      </form>
    </div>
  );
}

