import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check, AlertCircle } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Stay & Rooms",
  description:
    "Explore our two-story riverview lodge, traditional clay cottage, and clean bedrooms at Dellakkadawala Eco Resort.",
};

export default function StayPage() {
  return (
    <>
      <PageHeader
        label="Accommodation"
        title="Stay & Facilities"
        description="Peaceful rooms, sound of flowing water, and forest morning mist right outside your window."
        breadcrumbs={[{ label: "Stay" }]}
        imageSrc="/images/hero/hero4.jpg"
        imageAlt="Two-story resort house at Dellakkadawala"
      />

      {/* Main Notice Banner */}
      <section className="pt-12 pb-6 bg-[#071F1A]">
        <Container size="default">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#C9A84C]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]">
                <AlertCircle className="w-6 h-6 text-[#C9A84C]" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#F5F1E6]">
                  Room Availability & Bookings
                </h3>
                <p className="text-xs sm:text-sm text-[#A9BC95] mt-0.5">
                  Please call us directly to ask about rooms, group configurations, and day visits.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Button
                variant="primary"
                size="sm"
                href="/contact"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Book Your Stay
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Resort Buildings Section */}
      <section className="py-20 bg-[#071F1A]">
        <Container size="default">
          <div className="mb-14">
            <SectionHeading
              align="left"
              label="Our Architecture"
              title="Resort Buildings"
              description="Constructed in harmony with the natural hillside and riverbank."
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {siteConfig.stayOverview.buildings.map((b) => (
              <div
                key={b.name}
                className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-[#C9A84C]/50 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={b.image}
                    alt={b.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071F1A] via-transparent to-transparent" />
                </div>
                <div className="p-8 space-y-3">
                  <h3 className="font-serif text-2xl text-[#F5F1E6] font-medium">
                    {b.name}
                  </h3>
                  <p className="text-sm text-[#DDE5DD]/85 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sample Rooms (Honest soft placeholders) */}
      {/* TODO: replace with exact room numbers, names, and owner rates */}
      <section className="py-20 bg-[#0E3B2F]/30">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionHeading
              label="Bedrooms & Comfort"
              title="Sample Guest Rooms"
              description="Clean, well-ventilated rooms with private washrooms, comfortable beds, and nature outlooks."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.stayOverview.sampleRooms.map((room) => (
              <div
                key={room.id}
                className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-[#C9A84C]/40 transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#071F1A]/80 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-[#C9A84C]">
                    {room.subtitle}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl text-[#F5F1E6]">
                      {room.title}
                    </h3>
                    <p className="text-xs text-[#DDE5DD]/80 leading-relaxed">
                      {room.description}
                    </p>

                    <div className="pt-2 border-t border-white/10 space-y-2">
                      {room.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-[#DDE5DD]/90">
                          <Check className="w-3.5 h-3.5 text-[#C9A84C]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      variant="primary"
                      size="sm"
                      href="/contact"
                      className="w-full text-center justify-center"
                      icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                    >
                      Inquire for Availability
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Facilities checklist */}
      {/* TODO: verify all facilities with resort owner */}
      <section className="py-20 bg-[#071F1A]">
        <Container size="default">
          <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-[#DDE5DD]/15 space-y-8">
            <div className="border-b border-white/10 pb-6">
              <h3 className="font-serif text-3xl text-[#F5F1E6]">
                All Resort Amenities & Features
              </h3>
              <p className="text-xs text-[#A9BC95] mt-1">
                Designed for both day-out visitors and overnight stayers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteConfig.stayOverview.facilities.map((f) => (
                <div key={f.name} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-[#C9A84C]/20 text-[#C9A84C] mt-1 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F5F1E6]">{f.name}</h4>
                    <p className="text-xs text-[#DDE5DD]/70 mt-0.5 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

