"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowUpRight } from "lucide-react";
import { siteConfig, FAQItem } from "@/lib/siteConfig";

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {siteConfig.faqs.map((faq: FAQItem) => {
        const isOpen = openId === faq.id;

        return (
          <div
            key={faq.id}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "glass-panel border-[#C9A84C]/60 shadow-lg"
                : "glass-card border-white/10 hover:border-white/25"
            }`}
          >
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? "text-[#C9A84C]" : "text-[#A9BC95]"}`} />
                <h3 className="font-serif text-lg sm:text-xl text-[#F5F1E6] font-medium">
                  {faq.question}
                </h3>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#C9A84C] shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#DDE5DD]/85 leading-relaxed border-t border-white/5 space-y-2">
                    <p>{faq.answer}</p>
                    {faq.isPlaceholder && (
                      <p className="text-[11px] text-[#C9A84C] italic">
                        Please contact our desk to verify specific meal arrangements.
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      {/* Direct Help Button */}
      <div className="mt-12 p-6 rounded-3xl glass-panel border border-[#C9A84C]/30 text-center space-y-3">
        <h4 className="font-serif text-xl text-[#F5F1E6]">
          Have a different question?
        </h4>
        <p className="text-xs sm:text-sm text-[#DDE5DD]/80 max-w-md mx-auto">
          We are always happy to answer any questions about the river, road conditions, or food arrangements.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#C9A84C] text-[#071F1A] text-xs font-semibold uppercase tracking-wider hover:bg-[#D8B75B] transition-colors"
          >
            <span>Contact Our Team</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

