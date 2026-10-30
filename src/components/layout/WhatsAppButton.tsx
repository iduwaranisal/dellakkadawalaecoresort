"use client";

import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function WhatsAppButton() {
  return (
    <>
      {/* Floating Desktop & Tablet WhatsApp Action Button (Bottom Right) */}
      <aside
        aria-label="Quick contact actions"
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 group"
      >
        <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 bg-[#04120F]/90 text-[#F5F1E6] text-xs font-medium py-1.5 px-3 rounded-full border border-[#C9A84C]/30 shadow-lg pointer-events-none">
          Chat on WhatsApp
        </span>
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071F1A]"
          aria-label="Chat with Dellakkadawala Eco Resort on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white stroke-none" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Quick Action Bar (Bottom of screen on mobile) */}
      <nav
        aria-label="Mobile quick contact bar"
        className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#04120F]/95 backdrop-blur-xl border-t border-[#DDE5DD]/15 p-3 px-4 shadow-2xl"
      >
        <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
          <a
            href={`tel:${siteConfig.contact.primaryPhoneTel}`}
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-[#F5F1E6] text-xs font-semibold tracking-wide active:scale-98 transition-colors"
            aria-label="Call Dellakkadawala Eco Resort now"
          >
            <Phone className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>Call Now</span>
          </a>

          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold tracking-wide shadow-md active:scale-98 transition-colors"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white stroke-none" />
            <span>WhatsApp</span>
          </a>
        </div>
      </nav>
    </>
  );
}

