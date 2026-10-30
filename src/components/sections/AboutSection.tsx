"use client";

import React from "react";
import Image from "next/image";
import { Waves, Trees, Compass, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function AboutSection() {
  const highlights = [
    {
      icon: <Waves className="w-5 h-5 text-[#C9A84C]" />,
      title: "Beside a Natural River",
      desc: "Pure, fresh flowing water right at the edge of the resort grounds.",
    },
    {
      icon: <Trees className="w-5 h-5 text-[#C9A84C]" />,
      title: "Near Sinharaja Rainforest",
      desc: "Fresh jungle breezes, green tea estates, and diverse local birds.",
    },
    {
      icon: <Compass className="w-5 h-5 text-[#C9A84C]" />,
      title: "Quiet Village Setting",
      desc: "A calm, unhurried space designed for rest away from city noise.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#071F1A] relative overflow-hidden">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Images Column: Smooth FadeIn */}
          <div className="lg:col-span-6 relative">
            <FadeIn direction="right" duration={0.8}>
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  src="/images/hero/hero4.jpg"
                  alt="Two-story house at Dellakkadawala Eco Resort seen from the peaceful riverbank"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071F1A]/60 via-transparent to-transparent" />
              </div>

              {/* Overlapping smaller image */}
              <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-6 w-1/2 max-w-[260px] aspect-square rounded-2xl overflow-hidden border-4 border-[#071F1A] shadow-2xl hidden sm:block group">
                <Image
                  src="/images/gallery/img 21.jpg"
                  alt="Blue kayak floating on the clear natural river stream"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="260px"
                />
              </div>

              {/* Decorative gold badge */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full glass-card border border-[#C9A84C]/40 backdrop-blur-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
                  Dellawa, Galle
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <FadeIn direction="left" duration={0.8}>
              <SectionHeading
                align="left"
                label="Our Story"
                title="A Quiet Sanctuary in Nature"
                description="Dellakkadawala Eco Resort is a peaceful hideaway located in Dellawa, Neluwa, in Sri Lanka's Southern Province. Built beside a cool natural river and shaded by rainforest trees, our resort offers a simple, honest space to take a break from daily rush."
              />

              <p className="text-base text-[#DDE5DD]/80 leading-relaxed mt-4">
                Whether you come for an afternoon of river bathing with your children, a friendly kayak ride along the mist, or a quiet group meal under thatched roofs, you will find clean air, friendly hospitality, and deep calm here.
              </p>
            </FadeIn>

            {/* 3 Facts with Icons: Staggered reveal */}
            <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-4 border-t border-[#DDE5DD]/10">
              {highlights.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="p-3.5 sm:p-4 rounded-2xl glass-card flex sm:flex-col items-start gap-3 sm:gap-2 border border-white/5 hover:border-[#C9A84C]/40 hover:bg-white/[0.04] transition-all duration-300 h-full">
                    <div className="p-2 rounded-xl bg-white/5 shrink-0">
                      {item.icon}
                    </div>
                    <div className="space-y-0.5 sm:space-y-1">
                      <h4 className="font-serif text-sm sm:text-base text-[#F5F1E6] font-medium">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#DDE5DD]/70 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.3}>
              <div className="pt-2">
                <Button
                  variant="outline-gold"
                  size="md"
                  href="/about"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Read More About Us
                </Button>
              </div>
            </FadeIn>

          </div>

        </div>
      </Container>
    </section>
  );
}
