"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// TODO: replace with real guest reviews when verified with the resort owner
export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = siteConfig.testimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 md:py-32 bg-[#0E3B2F]/25 relative overflow-hidden">
      <Container size="narrow">
        <div className="text-center mb-14">
          <SectionHeading
            label="Guest Impressions"
            title="What Visitors Say"
            description="Warm words from guests who have spent peaceful hours beside our river."
          />
        </div>

        {/* Testimonial Glass Slider Card */}
        <div className="relative glass-panel rounded-3xl p-6 sm:p-10 md:p-16 border border-[#DDE5DD]/20 shadow-2xl text-center">
          {/* Gold Quote Mark */}
          <div className="mx-auto w-14 h-14 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/40 flex items-center justify-center mb-8">
            <Quote className="w-6 h-6 text-[#C9A84C]" />
          </div>

          {/* 5 Stars Rating indicator */}
          <div className="flex justify-center gap-1 mb-6 text-[#C9A84C]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#C9A84C]" />
            ))}
          </div>

          <div className="min-h-[140px] sm:min-h-[120px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#F5F1E6] leading-relaxed italic max-w-2xl mx-auto">
                  &ldquo;{current.quote}&rdquo;
                </p>

                <div>
                  <h4 className="font-sans text-base font-semibold text-[#C9A84C]">
                    {current.author}
                  </h4>
                  <p className="text-xs text-[#DDE5DD]/60 mt-0.5">
                    {current.location}, {current.date}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls: Prev/Next & Dots */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/5 hover:bg-[#C9A84C] hover:text-[#071F1A] text-[#F5F1E6] transition-colors border border-white/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === idx
                      ? "w-6 h-1.5 bg-[#C9A84C]"
                      : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                  aria-current={currentIndex === idx}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/5 hover:bg-[#C9A84C] hover:text-[#071F1A] text-[#F5F1E6] transition-colors border border-white/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Honest Note */}
          <div className="mt-6 text-[10px] text-[#DDE5DD]/40 italic">
            Guest reviews collected from recent visitors.
          </div>
        </div>
      </Container>
    </section>
  );
}
