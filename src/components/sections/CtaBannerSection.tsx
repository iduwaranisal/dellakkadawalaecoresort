"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function CtaBannerSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <Container size="default">
        {/* Rounded Glass Box over Misty River Image with Smooth FadeIn */}
        <FadeIn duration={0.8}>
          <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-[#DDE5DD]/20 shadow-2xl p-8 sm:p-14 md:p-20 text-center group">
            
            {/* Background image: misty river with gentle zoom */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/hero/hero3.jpg"
                alt="Misty river at Dellakkadawala Eco Resort"
                fill
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-[#071F1A]/85 backdrop-blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071F1A] via-transparent to-[#071F1A]" />
            </div>

            {/* Foreground content */}
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C9A84C]/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C9A84C]">
                  Plan Your Getaway
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F5F1E6] font-normal leading-tight">
                Ready for a Peaceful Day by the River?
              </h2>

              <p className="text-base sm:text-lg text-[#DDE5DD]/90 leading-relaxed font-normal">
                Get in touch with us to arrange your family day out, kayak paddling, or group gathering in Dellawa. We are here to welcome you.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact"
                  className="whitespace-nowrap shadow-[0_4px_24px_rgba(201,168,76,0.35)]"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Book Your Visit
                </Button>

                <Button
                  variant="glass"
                  size="lg"
                  href="/experiences"
                  className="whitespace-nowrap"
                  icon={<Compass className="w-4 h-4" />}
                >
                  Explore Experiences
                </Button>
              </div>

              <div className="pt-2 text-xs text-[#A9BC95]">
                Dellawa, Neluwa, Galle, Sri Lanka
              </div>
            </div>

          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
