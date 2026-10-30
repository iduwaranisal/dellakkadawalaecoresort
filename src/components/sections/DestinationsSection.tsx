"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Compass, Check, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function DestinationsSection() {
  return (
    <section id="destinations" className="py-20 sm:py-24 md:py-32 bg-[#0E3B2F]/25 relative overflow-hidden">
      {/* Decorative ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-[140px] pointer-events-none" />

      <Container size="default" className="relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <SectionHeading
            label="Explore the Region"
            title="Nearby Tourism Destinations"
            description="Dellakkadawala is your gateway to the Sinharaja rainforest ecosystem, hidden cascades, and emerald tea hills. Spend an unforgettable day exploring these famous local spots."
          />
        </FadeIn>

        {/* 6 Destinations Grid (Fully Mobile Responsive: 1-col on mobile, 2-col on tablet, 3-col on desktop) */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.nearbyDestinations.map((dest) => (
            <StaggerItem key={dest.id} className="h-full">
              <div className="group rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-[#C9A84C]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition-all duration-400 hover:-translate-y-1.5 flex flex-col justify-between h-full">
                
                {/* Photo Container */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.alt}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071F1A] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#071F1A]/85 backdrop-blur-md border border-[#C9A84C]/35 text-[10.5px] font-semibold uppercase tracking-wider text-[#C9A84C]">
                    {dest.tag}
                  </div>

                  {/* Distance Badge */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 text-xs text-[#DDE5DD]/90">
                    <Navigation className="w-3.5 h-3.5 text-[#C9A84C] shrink-0" />
                    <span className="font-medium tracking-wide">{dest.distance}</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <h3 className="font-serif text-2xl text-[#F5F1E6] font-medium group-hover:text-[#C9A84C] transition-colors leading-snug">
                      {dest.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#DDE5DD]/80 leading-relaxed">
                      {dest.description}
                    </p>

                    {/* Highlights */}
                    <div className="pt-2 border-t border-white/10 space-y-2">
                      {dest.highlights.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-[#DDE5DD]/90">
                          <Check className="w-3.5 h-3.5 text-[#C9A84C] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-4 border-t border-white/5">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A84C] hover:text-[#F5F1E6] transition-colors"
                    >
                      <Compass className="w-3.5 h-3.5" />
                      <span>Plan a Visit Here</span>
                    </Link>
                  </div>
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom Helper Bar */}
        <FadeIn delay={0.25} className="mt-12 sm:mt-16 text-center">
          <div className="p-6 rounded-3xl glass-panel border border-[#C9A84C]/30 max-w-2xl mx-auto space-y-3">
            <h4 className="font-serif text-xl sm:text-2xl text-[#F5F1E6]">
              Need Help Planning Your Day Trips?
            </h4>
            <p className="text-xs sm:text-sm text-[#DDE5DD]/80 leading-relaxed">
              Our team knows all local trails, waterfall spots, and best times to visit Sinharaja. Reach out to us or talk to us when you arrive.
            </p>
            <div className="pt-1">
              <Button
                variant="primary"
                size="sm"
                href="/contact"
                className="whitespace-nowrap"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Inquire About Sightseeing
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
