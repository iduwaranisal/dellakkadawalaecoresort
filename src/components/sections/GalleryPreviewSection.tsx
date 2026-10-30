"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const previewImages = [
  {
    src: "/images/hero/hero1.jpg",
    alt: "Aerial view of Dellakkadawala Eco Resort and river",
    mobileSpan: "col-span-2 aspect-[16/10] md:col-span-2 md:aspect-auto md:row-span-2",
    title: "Riverfront Grounds",
  },
  {
    src: "/images/gallery/img 21.jpg",
    alt: "Paddling a blue kayak along calm river",
    mobileSpan: "col-span-1 aspect-[4/3] md:col-span-1 md:aspect-square md:row-span-1",
    title: "Gentle Kayaking",
  },
  {
    src: "/images/gallery/img 5.jpg",
    alt: "Fresh river running water flowing over stones",
    mobileSpan: "col-span-1 aspect-[4/3] md:col-span-1 md:aspect-square md:row-span-1",
    title: "Natural River Pool",
  },
  {
    src: "/images/gallery/img 3.jpg",
    alt: "Balcony overlook with palms and evening lamps",
    mobileSpan: "col-span-1 aspect-[4/3] md:col-span-1 md:aspect-square md:row-span-1",
    title: "Evening Balcony",
  },
  {
    src: "/images/gallery/img 6.jpg",
    alt: "Barbecue grill on the open resort dining patio",
    mobileSpan: "col-span-1 aspect-[4/3] md:col-span-1 md:aspect-square md:row-span-1",
    title: "Outdoor Barbecue",
  },
  {
    src: "/images/gallery/img 9.jpg",
    alt: "Night reflection of resort lights on still water",
    mobileSpan: "col-span-2 aspect-[16/9] md:col-span-2 md:row-span-1",
    title: "Night River Reflection",
  },
];

export function GalleryPreviewSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-[#071F1A] relative">
      <Container size="default">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
            <SectionHeading
              align="left"
              label="Visual Journey"
              title="Moments at Dellakkadawala"
              description="A glimpse of our river, quiet cottages, lush rainforest canopy, and relaxed gatherings."
            />
            <div className="shrink-0">
              <Button
                variant="outline-gold"
                size="md"
                href="/gallery"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                View Full Gallery (25 Photos)
              </Button>
            </div>
          </div>
        </FadeIn>

        {/* Bento Grid: 2 columns on mobile, 4 columns on desktop with natural responsive aspect ratios */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 md:auto-rows-[220px]"
        >
          {previewImages.map((img) => (
            <StaggerItem key={img.src} className={img.mobileSpan}>
              <Link
                href="/gallery"
                className="group relative block w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-[#C9A84C]/50 transition-all duration-400 shadow-md hover:shadow-2xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Gradient: always legible on mobile, deepening on desktop hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071F1A]/90 via-[#071F1A]/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between z-10">
                  <p className="font-serif text-xs sm:text-sm md:text-base text-[#F5F1E6] font-medium leading-tight drop-shadow-sm">
                    {img.title}
                  </p>
                  <span className="p-1 sm:p-1.5 rounded-full bg-white/15 backdrop-blur-md text-[#C9A84C] opacity-80 group-hover:opacity-100 transition-opacity shrink-0 ml-1.5">
                    <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
