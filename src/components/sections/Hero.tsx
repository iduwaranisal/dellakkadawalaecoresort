"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { heroImages } from "@/lib/images";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  // Auto-play slideshow every 6 seconds, paused when hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="relative min-h-svh w-full p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-center overflow-hidden bg-[#071F1A]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Dellakkadawala Eco Resort"
    >
      {/* Luxury Rounded Canvas Frame with Generous Margins */}
      <div className="relative w-full h-[calc(100svh-1.5rem)] sm:h-[calc(100svh-2.5rem)] md:h-[calc(100svh-3rem)] rounded-2xl sm:rounded-3xl lg:rounded-[2.75rem] overflow-hidden border border-white/15 shadow-[0_25px_70px_-20px_rgba(0,0,0,0.85)] flex flex-col justify-between">
        
        {/* Background Slideshow with Slow Cinematic Zoom */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 1.4, ease: "easeInOut" },
                scale: { duration: 7, ease: "easeOut" },
              }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[currentIndex].src}
                alt={heroImages[currentIndex].alt}
                fill
                priority={currentIndex === 0}
                className="object-cover object-center"
                sizes="100vw"
                quality={92}
              />
            </motion.div>
          </AnimatePresence>

          {/* Sophisticated Dual Gradient Overlays: Rich forest tone for crystal clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071F1A]/90 via-[#071F1A]/60 to-[#071F1A]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071F1A] via-transparent to-[#071F1A]/60" />
        </div>

        {/* Top spacer for navbar clearance */}
        <div className="h-28 sm:h-32 md:h-36 lg:h-44 shrink-0 relative z-10" />

        {/* Central Hero Typography & Call-To-Actions (Clean, open, and elegant) */}
        <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24 max-w-5xl my-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-7"
          >
            {/* Small Gold Tag */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C9A84C]/40 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
              <span className="text-[10.5px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A84C]">
                Welcome to Dellawa, Sri Lanka
              </span>
            </div>

            {/* Grand Cormorant Garamond Heading */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-[#F5F1E6] font-normal leading-[1.04] tracking-tight max-w-4xl">
              Peace Beside the River
            </h1>

            {/* Poetic & Honest Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#DDE5DD]/90 max-w-2xl font-normal leading-relaxed">
              A quiet village retreat where fresh natural waters flow and misty rainforest hills welcome you to rest, swim, and spend gentle days with family.
            </p>

            {/* Elegant Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-5 pt-3">
              <Button
                variant="primary"
                size="lg"
                href="/contact"
                className="shadow-[0_8px_30px_rgba(201,168,76,0.3)]"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Book Your Visit
              </Button>

              <Button
                variant="glass"
                size="lg"
                href="/gallery"
              >
                See the Gallery
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Status & Navigation Bar (Single, unified, uncluttered) */}
        <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24 pb-6 sm:pb-8 pt-5 border-t border-white/10 backdrop-blur-md bg-black/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Slide Indicator & Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-[#C9A84C] hover:text-[#071F1A] text-white backdrop-blur-sm border border-white/15 transition-all cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-2 px-1">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentIndex === idx
                      ? "w-7 h-1.5 bg-[#C9A84C]"
                      : "w-2 h-1.5 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Jump to slide ${idx + 1}`}
                  aria-current={currentIndex === idx}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-[#C9A84C] hover:text-[#071F1A] text-white backdrop-blur-sm border border-white/15 transition-all cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <span className="font-mono text-xs text-[#DDE5DD]/70 tracking-widest ml-1">
              0{currentIndex + 1} / 0{heroImages.length}
            </span>
          </div>

          {/* Scroll Down Prompt */}
          <a
            href="#about"
            className="group inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.22em] text-[#DDE5DD]/75 hover:text-[#C9A84C] transition-colors"
          >
            <span>Scroll Down</span>
            <span className="w-6 h-[1px] bg-[#C9A84C]/50 group-hover:w-10 transition-all duration-300" />
            <ArrowDown className="w-3.5 h-3.5 text-[#C9A84C] animate-bounce" />
          </a>

          {/* Location Caption */}
          <div className="text-xs text-[#DDE5DD]/70 tracking-wide font-medium text-center sm:text-right hidden md:block">
            Dellawa, Neluwa, Galle, Near Sinharaja
          </div>

        </div>

      </div>
    </section>
  );
}
