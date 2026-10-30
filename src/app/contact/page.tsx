import type { Metadata } from "next";
import { Phone, MessageCircle, ExternalLink, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { EnquiryForm } from "@/components/contact/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact & Bookings",
  description:
    "Contact Dellakkadawala Eco Resort in Dellawa, Neluwa. Call +94 71 180 6801, message on WhatsApp, or send an enquiry form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Get in Touch"
        title="Contact & Bookings"
        description="We are delighted to assist with your day out, family visit, or room reservations. Call, message, or fill our form below."
        breadcrumbs={[{ label: "Contact" }]}
        imageSrc="/images/hero/hero2.jpg"
        imageAlt="Dellakkadawala Eco Resort cottage in morning light"
      />

      <section className="py-20 md:py-28 bg-[#071F1A]">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Direct Phone Cards & Quick Links */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A84C]">
                  Direct Reach
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E6] font-normal mt-1">
                  We Love Hearing From You
                </h2>
                <p className="text-sm text-[#DDE5DD]/80 mt-2 leading-relaxed">
                  For the fastest response and instant date confirmations, call us or send a WhatsApp message.
                </p>
              </div>

              {/* Primary Phone Card */}
              <a
                href={`tel:${siteConfig.contact.primaryPhoneTel}`}
                className="group block p-6 rounded-3xl glass-card border border-white/10 hover:border-[#C9A84C]/60 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-[#C9A84C]/15 border border-[#C9A84C]/40 text-[#C9A84C]">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-[#A9BC95] uppercase tracking-wider font-semibold">
                        Primary Hotline
                      </p>
                      <p className="font-serif text-xl sm:text-2xl text-[#F5F1E6] group-hover:text-[#C9A84C] transition-colors mt-0.5">
                        {siteConfig.contact.primaryPhone}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-[#C9A84C] font-semibold uppercase tracking-wider hidden sm:inline">
                    Tap to Call
                  </span>
                </div>
              </a>

              {/* Secondary Phone Card */}
              <a
                href={`tel:${siteConfig.contact.secondaryPhoneTel}`}
                className="group block p-6 rounded-3xl glass-card border border-white/10 hover:border-[#C9A84C]/60 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/15 text-[#DDE5DD]">
                      <Phone className="w-6 h-6 text-[#C9A84C]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#A9BC95] uppercase tracking-wider font-semibold">
                        Secondary Phone
                      </p>
                      <p className="font-serif text-xl sm:text-2xl text-[#F5F1E6] group-hover:text-[#C9A84C] transition-colors mt-0.5">
                        {siteConfig.contact.secondaryPhone}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-[#C9A84C] font-semibold uppercase tracking-wider hidden sm:inline">
                    Tap to Call
                  </span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 rounded-3xl bg-[#25D366]/15 border border-[#25D366]/40 hover:border-[#25D366] transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-[#25D366] text-white">
                      <MessageCircle className="w-6 h-6 fill-white stroke-none" />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-300 uppercase tracking-wider font-semibold">
                        Chat Online
                      </p>
                      <p className="font-serif text-xl sm:text-2xl text-white group-hover:text-emerald-200 transition-colors mt-0.5">
                        WhatsApp Chat
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-300 font-semibold uppercase tracking-wider hidden sm:inline">
                    Message Now
                  </span>
                </div>
              </a>

              {/* Facebook Card */}
              <a
                href={siteConfig.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl glass-card border border-white/10 hover:border-[#C9A84C]/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 text-[#C9A84C]">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-[#F5F1E6]">
                    Follow Dellakkadawala on Facebook
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#C9A84C]" />
              </a>

              {/* Address Reminder */}
              <div className="p-6 rounded-3xl glass-panel border border-[#DDE5DD]/10 space-y-3 text-xs text-[#DDE5DD]/80">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                  <span>{siteConfig.contact.address.full}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                  <span>{siteConfig.contact.operatingHoursNote}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}

