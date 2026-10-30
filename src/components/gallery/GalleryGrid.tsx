"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { galleryImages, heroImages, ImageItem } from "@/lib/images";

// Combine hero and gallery images for the complete portfolio of 25 real photos
const allGalleryItems: ImageItem[] = [
  ...heroImages,
  ...galleryImages,
];

type CategoryFilter = "all" | "resort" | "river" | "rooms" | "dining";

const filterTabs: { label: string; value: CategoryFilter }[] = [
  { label: "All Photos", value: "all" },
  { label: "River & Kayaks", value: "river" },
  { label: "Resort & Nature", value: "resort" },
  { label: "Rooms & Suites", value: "rooms" },
  { label: "Dining & Gatherings", value: "dining" },
];

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredImages = allGalleryItems.filter((img) => {
    if (activeCategory === "all") return true;
    return img.category === activeCategory;
  });

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev !== null ? (prev + 1) % filteredImages.length : 0
    );
  }, [activeImageIndex, filteredImages.length]);

  const prevImage = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0
    );
  }, [activeImageIndex, filteredImages.length]);

  // Keyboard navigation & Escape key support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, nextImage, prevImage]);

  // Lock body scroll when Lightbox is active
  useEffect(() => {
    if (activeImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImageIndex]);

  // Swipe for mobile lightbox
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
      nextImage();
    } else if (distance < -50) {
      prevImage();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="space-y-10">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {filterTabs.map((tab) => {
          const isActive = activeCategory === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => {
                setActiveCategory(tab.value);
                setActiveImageIndex(null);
              }}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-[#C9A84C] text-[#071F1A] font-semibold shadow-[0_0_20px_rgba(201,168,76,0.3)]"
                  : "glass-card text-[#DDE5DD]/80 hover:text-[#F5F1E6] hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Masonry / Responsive Column Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredImages.map((img, idx) => (
          <div
            key={img.id}
            onClick={() => setActiveImageIndex(idx)}
            className="group relative break-inside-avoid rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-[#C9A84C]/50 transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-1"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071F1A]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-xs uppercase tracking-wider text-[#C9A84C] font-semibold">
                  {img.category}
                </span>
                <p className="font-serif text-lg text-[#F5F1E6] font-medium mt-0.5">
                  {img.caption || img.alt}
                </p>
                <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Interactive Lightbox */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-[#071F1A]/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 md:p-8"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Top Lightbox Bar */}
            <div className="flex items-center justify-between z-10 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs sm:text-sm text-[#C9A84C] tracking-widest">
                  {activeImageIndex + 1} / {filteredImages.length}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#DDE5DD]/60">
                  {filteredImages[activeImageIndex].category}
                </span>
              </div>

              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F5F1E6] hover:text-[#C9A84C] transition-colors border border-white/10 cursor-pointer"
                aria-label="Close image viewer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Central Image View with Navigation */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/40 hover:bg-[#C9A84C] text-white hover:text-[#071F1A] backdrop-blur-md border border-white/15 transition-all cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Photo */}
              <div className="relative w-full h-full max-w-5xl max-h-[75vh] flex items-center justify-center">
                <Image
                  src={filteredImages[activeImageIndex].src}
                  alt={filteredImages[activeImageIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/40 hover:bg-[#C9A84C] text-white hover:text-[#071F1A] backdrop-blur-md border border-white/15 transition-all cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="text-center z-10 border-t border-white/10 pt-4">
              <p className="font-serif text-base sm:text-lg text-[#F5F1E6]">
                {filteredImages[activeImageIndex].caption || filteredImages[activeImageIndex].alt}
              </p>
              <p className="text-xs text-[#DDE5DD]/50 mt-1">
                Use arrow keys or swipe left/right to browse. Press Esc to close.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

