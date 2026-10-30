"use client";

import React from "react";
import { MapPin, Navigation, Compass, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function LocationPreviewSection() {
  return (
    <section id="location" className="py-24 md:py-32 bg-[#071F1A] relative">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Location details and directions with smooth entrance */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn direction="right">
              <SectionHeading
                align="left"
                label="Find Your Way"
                title="Nestled in Dellawa, Neluwa"
                description="Located in Galle District, Southern Province, close to the Sinharaja Rainforest region and surrounding red tea hills."
              />
            </FadeIn>

            <StaggerContainer staggerDelay={0.12} className="space-y-4 pt-2">
              <StaggerItem>
                <div className="p-4 rounded-2xl glass-card flex items-start gap-3 border border-white/10 hover:border-[#C9A84C]/40 transition-colors">
                  <MapPin className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#F5F1E6]">Address</h4>
                    <p className="text-xs text-[#DDE5DD]/80 mt-1 leading-relaxed">
                      {siteConfig.contact.address.full}
                    </p>
                    <p className="text-[11px] text-[#A9BC95] mt-0.5">
                      {siteConfig.contact.address.landmark}
                    </p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-4 rounded-2xl glass-card flex items-start gap-3 border border-white/10 hover:border-[#C9A84C]/40 transition-colors">
                  <Navigation className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#F5F1E6]">Directions</h4>
                    <p className="text-xs text-[#DDE5DD]/80 mt-1 leading-relaxed">
                      Accessible via the Neluwa road network from Galle, Matara, or Deniyaya. Free private vehicle parking is available on-site.
                    </p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-4 rounded-2xl glass-card flex items-start gap-3 border border-white/10 hover:border-[#C9A84C]/40 transition-colors">
                  <Compass className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#F5F1E6]">Nearby Highlights</h4>
                    <p className="text-xs text-[#DDE5DD]/80 mt-1 leading-relaxed">
                      Sinharaja Rainforest reserve border, scenic hill tea estates, and natural cascades.
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  variant="primary"
                  size="md"
                  href={siteConfig.contact.googleMapsDirectionsUrl}
                  isExternal
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Open in Google Maps
                </Button>
                <Button
                  variant="glass"
                  size="md"
                  href="/location"
                >
                  View Full Route Guide
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Right: Map Embed with smooth Reveal */}
          <div className="lg:col-span-7">
            <FadeIn direction="left" duration={0.8}>
              <div className="w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden glass-card border border-white/15 shadow-2xl relative group">
                <iframe
                  title="Dellakkadawala Eco Resort Map"
                  src={siteConfig.contact.googleMapsEmbedUrl}
                  className="w-full h-full border-0 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute top-4 left-4 pointer-events-none px-3.5 py-1.5 rounded-full bg-[#071F1A]/90 backdrop-blur-md border border-[#C9A84C]/40 text-[11px] font-semibold text-[#C9A84C] uppercase tracking-wider">
                  Dellawa, Neluwa
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </Container>
    </section>
  );
}
