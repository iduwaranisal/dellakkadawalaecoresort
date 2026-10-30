"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function WhySection() {
  const steps = [
    {
      step: "01",
      title: "Arrive & Settle",
      subtitle: "Leave the city behind",
      desc: "Drive through the green hills of Neluwa, park easily on our grounds, and breathe in the cool rainforest air.",
    },
    {
      step: "02",
      title: "Enjoy the River",
      subtitle: "Water play and gentle nature",
      desc: "Swim in pure fresh water, paddle our blue kayaks along the calm stream, or walk through nearby village tea trails.",
    },
    {
      step: "03",
      title: "Unwind & Refresh",
      subtitle: "Rest and good company",
      desc: "Share hearty food on the shaded veranda, enjoy an evening barbecue, and return home with a light, happy mind.",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Full-width Forest Background Photo with slow subtle parallax feel */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero1.jpg"
          alt="Lush rainforest trees and winding river at Dellakkadawala"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#071F1A]/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071F1A] via-transparent to-[#071F1A]" />
      </div>

      <Container size="default" className="relative z-10">
        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <SectionHeading
            label="Your Experience"
            title="A Simple 3-Step Journey"
            description="Spending a day at Dellakkadawala is unhurried and effortless. Here is how your visit unfolds from start to finish."
          />
        </FadeIn>

        {/* Large Rounded Glass Panel */}
        <FadeIn delay={0.15}>
          <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 md:p-12 border border-[#DDE5DD]/20 shadow-2xl space-y-8 divide-y divide-[#DDE5DD]/10">
            <StaggerContainer staggerDelay={0.15} className="space-y-8 divide-y divide-[#DDE5DD]/10">
              {steps.map((item) => (
                <StaggerItem key={item.step} className="pt-6 sm:pt-8 first:pt-0">
                  <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6 items-start md:items-center group transition-transform duration-300 hover:translate-x-1">
                    
                    {/* On Mobile: Badge + Title side-by-side. On Desktop: In separate grid columns */}
                    <div className="flex items-center gap-4 md:contents">
                      {/* Badge Column */}
                      <div className="md:col-span-2 flex items-center md:justify-center shrink-0">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#A9BC95] group-hover:bg-[#C9A84C] text-[#071F1A] font-serif font-bold text-xl sm:text-2xl flex items-center justify-center shadow-md transition-colors duration-300">
                          {item.step}
                        </div>
                      </div>

                      {/* Title & Subtitle */}
                      <div className="md:col-span-4 space-y-0.5 sm:space-y-1">
                        <h3 className="font-serif text-xl sm:text-2xl text-[#F5F1E6] group-hover:text-[#C9A84C] transition-colors font-medium">
                          {item.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-6 pl-0 md:pl-2">
                      <p className="text-xs sm:text-sm md:text-base text-[#DDE5DD]/85 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
