import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ExternalLink, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#04120F] border-t border-[#DDE5DD]/10 text-[#F5F1E6] pt-16 pb-24 md:pb-16 relative overflow-hidden">
      {/* Decorative subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

      <Container size="default">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#DDE5DD]/10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 focus:outline-none group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#C9A84C]/50 shadow-md shrink-0 bg-[#071F1A]">
                <Image
                  src="/images/logo.jpg"
                  alt="Dellakkadawala Eco Resort Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-[#F5F1E6] block group-hover:text-[#C9A84C] transition-colors">
                  {siteConfig.shortName}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9A84C] block mt-0.5">
                  {siteConfig.subTitle}
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#DDE5DD]/80 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-[#C9A84C] hover:text-[#F5F1E6] transition-colors py-1.5 px-3 rounded-full bg-white/5 border border-[#C9A84C]/30"
                aria-label="Visit our Facebook page"
              >
                <span>Follow on Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-lg text-[#F5F1E6] font-medium tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#DDE5DD]/75 hover:text-[#C9A84C] transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-[#C9A84C]/60" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/faq"
                  className="text-[#DDE5DD]/75 hover:text-[#C9A84C] transition-colors inline-flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#C9A84C]/60" />
                  <span>Frequently Asked Questions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Location */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-lg text-[#F5F1E6] font-medium tracking-wide">
              Contact & Visit
            </h4>
            
            <div className="space-y-3 text-sm text-[#DDE5DD]/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A84C] shrink-0 mt-1" />
                <div>
                  <p className="text-[#F5F1E6] font-medium">{siteConfig.contact.address.full}</p>
                  <p className="text-xs text-[#DDE5DD]/60 mt-0.5">{siteConfig.contact.address.landmark}</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A84C] hover:text-[#F5F1E6] transition-colors"
                >
                  <span>Reach Our Contact Desk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs text-[#A9BC95] leading-relaxed">
                Quiet nature retreat near Sinharaja rainforest. Please call before visiting so we can prepare for you.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DDE5DD]/50">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Dellawa, Neluwa, Galle, Southern Province, Sri Lanka
          </p>
        </div>
      </Container>
    </footer>
  );
}
