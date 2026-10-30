"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "top-0 bg-[#071F1A]/95 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl"
            : "top-5 sm:top-7 md:top-9 lg:top-11 py-2"
        }`}
      >
        <div
          className={`mx-auto transition-all duration-500 flex items-center justify-between ${
            isScrolled
              ? "max-w-7xl px-6 sm:px-8 md:px-12"
              : "max-w-6xl px-6 sm:px-10 md:px-12 lg:px-14"
          }`}
        >
          {/* Brand Logo with Official Emblem */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-lg p-1 -m-1"
            aria-label="Dellakkadawala Eco Resort Home"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#C9A84C]/50 shadow-md shrink-0 bg-[#071F1A]">
              <Image
                src="/images/logo.jpg"
                alt="Dellakkadawala Eco Resort Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-serif text-xl sm:text-2xl font-medium tracking-wide text-[#F5F1E6] group-hover:text-[#C9A84C] transition-colors leading-none">
                {siteConfig.shortName}
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9A84C] mt-1 group-hover:text-[#F5F1E6] transition-colors">
                {siteConfig.subTitle}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-2.5 xl:px-3.5 py-1.5 text-xs xl:text-sm font-medium transition-all duration-200 tracking-wider rounded-full whitespace-nowrap ${
                    isActive
                      ? "text-[#C9A84C] bg-white/[0.04]"
                      : "text-[#DDE5DD]/80 hover:text-[#F5F1E6] hover:bg-white/[0.06]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 xl:left-3.5 xl:right-3.5 h-[1.5px] bg-[#C9A84C] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Booking Button Only (Phone number removed for clean, non-wrapping layout) */}
          <div className="hidden lg:flex items-center shrink-0">
            <Button
              variant="primary"
              size="sm"
              href="/contact"
              className="whitespace-nowrap shadow-[0_4px_20px_rgba(201,168,76,0.25)] text-xs xl:text-sm px-4 xl:px-5 py-2"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Book Your Visit
            </Button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2.5 rounded-full text-[#F5F1E6] hover:text-[#C9A84C] bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]"
            aria-label="Open mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] lg:hidden bg-[#071F1A]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex flex-col items-start"
              >
                <span className="font-serif text-2xl text-[#F5F1E6]">
                  {siteConfig.shortName}
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A84C]">
                  {siteConfig.subTitle}
                </span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-full text-[#F5F1E6] hover:text-[#C9A84C] bg-white/10 border border-white/10"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-3 my-auto py-6">
              {siteConfig.navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-2xl font-serif block py-2 transition-colors ${
                        isActive
                          ? "text-[#C9A84C] pl-3 border-l-2 border-[#C9A84C]"
                          : "text-[#F5F1E6] hover:text-[#C9A84C]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="border-t border-white/10 pt-5 space-y-4">
              <Button
                variant="primary"
                size="md"
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full justify-center"
              >
                Book Your Visit
              </Button>

              <div className="text-center text-xs text-[#DDE5DD]/60 pt-1">
                Dellawa, Neluwa, Galle, Sri Lanka
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
