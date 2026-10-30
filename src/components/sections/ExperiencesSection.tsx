"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Waves, Compass, Sun, Footprints, Users, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const iconsMap: Record<string, React.ReactNode> = {
  "river-bathing": <Waves className="w-5 h-5 text-[#C9A84C]" />,
  kayaking: <Compass className="w-5 h-5 text-[#C9A84C]" />,
  "day-outs": <Sun className="w-5 h-5 text-[#C9A84C]" />,
  "nature-trails": <Footprints className="w-5 h-5 text-[#C9A84C]" />,
  "group-gatherings": <Users className="w-5 h-5 text-[#C9A84C]" />,
};

export function ExperiencesSection() {
  return (
    <section id="experiences" className="py-24 md:py-32 bg-[#0E3B2F]/40 relative">
      <Container size="default">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <SectionHeading
              align="left"
              label="Activities & Nature"
              title="Experiences at the Resort"
              description="Spend your time at your own pace. Dip into the fresh water, explore misty river bends, or relax in the shade with loved ones."
            />
            <div className="shrink-0">
              <Button
                variant="outline-gold"
                size="sm"
                href="/experiences"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                All Experiences
              </Button>
            </div>
          </div>
        </FadeIn>

        {/* 5 Cards Grid with Staggered Entrance */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.experiences.map((exp, index) => {
            const isWide = index === 0 || index === 3;
            return (
              <StaggerItem
                key={exp.id}
                className={`${isWide ? "md:col-span-2 lg:col-span-2" : "col-span-1"}`}
              >
                <div
                  className="group relative rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-[#C9A84C]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col justify-between h-full"
                >
                  {/* Image Container with zoom on hover */}
                  <div className="relative w-full aspect-[16/10] sm:aspect-auto sm:h-72 overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.alt}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071F1A] via-[#071F1A]/30 to-transparent" />
                    
                    {/* Floating Icon badge */}
                    <div className="absolute top-4 left-4 p-3 rounded-2xl bg-[#071F1A]/80 backdrop-blur-md border border-[#C9A84C]/30 shadow-lg group-hover:border-[#C9A84C] transition-colors">
                      {iconsMap[exp.id] || <Waves className="w-5 h-5 text-[#C9A84C]" />}
                    </div>

                    {/* Subtitle tag */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold uppercase tracking-wider text-[#F5F1E6]">
                      {exp.subtitle}
                    </div>
                  </div>

                  {/* Content body */}
                  <div className="p-5 sm:p-7 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl text-[#F5F1E6] font-medium group-hover:text-[#C9A84C] transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-[#DDE5DD]/80 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link
                        href="/experiences"
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A84C] group-hover:text-[#F5F1E6] transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
