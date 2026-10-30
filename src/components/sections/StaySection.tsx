"use client";

import React from "react";
import Image from "next/image";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function StaySection() {
  return (
    <section id="stay" className="py-24 md:py-32 bg-[#071F1A] relative">
      <Container size="default">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            label="Accommodation & Grounds"
            title="Stay and Facilities"
            description="Our resort buildings blend rustic charm with riverfront calmness. Rest peacefully listening to the flowing water and forest sounds."
          />
        </FadeIn>

        {/* 2 Main Buildings Showcase with Staggered Entrance */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {siteConfig.stayOverview.buildings.map((building) => (
            <StaggerItem key={building.name}>
              <div
                className="group rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-[#C9A84C]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between h-full"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={building.image}
                    alt={building.alt}
                    fill
                    className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071F1A] via-transparent to-transparent" />
                </div>

                <div className="p-5 sm:p-7 md:p-8 space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F5F1E6] font-medium group-hover:text-[#C9A84C] transition-colors">
                    {building.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#DDE5DD]/80 leading-relaxed">
                    {building.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Facilities Box with Clear Call Notice */}
        <FadeIn delay={0.2}>
          <div className="glass-panel rounded-3xl p-5 sm:p-8 md:p-12 border border-[#DDE5DD]/15 space-y-8 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#DDE5DD]/10 pb-6">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F1E6]">
                  Resort Facilities & Amenities
                </h3>
                <p className="text-sm text-[#A9BC95] mt-1">
                  Everything you need for a comfortable day visit or overnight stay.
                </p>
              </div>

              {/* Clear Prompt Note */}
              <div className="px-5 py-3 rounded-2xl bg-[#C9A84C]/15 border border-[#C9A84C]/40 flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#C9A84C] shrink-0" />
                <p className="text-xs sm:text-sm font-medium text-[#F5F1E6]">
                  Contact our desk to check current room availability and day visit options.
                </p>
              </div>
            </div>

            {/* Facilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteConfig.stayOverview.facilities.map((fac) => (
                <div key={fac.name} className="flex items-start gap-3 group">
                  <div className="p-1 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 mt-1 shrink-0 group-hover:bg-[#C9A84C] group-hover:text-[#071F1A] transition-colors">
                    <Check className="w-3.5 h-3.5 text-[#C9A84C] group-hover:text-[#071F1A]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#F5F1E6] group-hover:text-[#C9A84C] transition-colors">{fac.name}</h4>
                    <p className="text-xs text-[#DDE5DD]/70 mt-0.5 leading-relaxed">{fac.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="pt-6 border-t border-[#DDE5DD]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#DDE5DD]/70 text-center sm:text-left">
                Have questions about bed configurations or large group bookings?
              </p>
              <div className="flex items-center gap-3">
                <Button
                  variant="primary"
                  size="sm"
                  href="/contact"
                >
                  Inquire for Availability
                </Button>
                <Button
                  variant="glass"
                  size="sm"
                  href="/stay"
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  View Rooms
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>

      </Container>
    </section>
  );
}
