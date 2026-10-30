"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { FadeIn } from "@/components/ui/FadeIn";

export function FaqSection() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-[#04120F] relative overflow-hidden">
      {/* Decorative ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#C9A84C]/5 rounded-full blur-[140px] pointer-events-none" />

      <Container size="default" className="relative z-10">
        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <SectionHeading
            label="Clear Answers"
            title="Frequently Asked Questions"
            description="Helpful information to plan your day visit or overnight stay beside the river."
          />
        </FadeIn>

        <FadeIn delay={0.15}>
          <FaqAccordion />
        </FadeIn>
      </Container>
    </section>
  );
}
