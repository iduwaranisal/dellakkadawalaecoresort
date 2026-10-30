import type { Metadata } from "next";
import { MapPin, Navigation, Trees, Sparkles, ExternalLink, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Location & Directions",
  description:
    "How to reach Dellakkadawala Eco Resort in Dellawa, Neluwa, Galle. Map embed, nearby rainforest highlights, and travel steps.",
};

export default function LocationPage() {
  const travelSteps = [
    {
      step: "01",
      mode: "From Galle / Southern Expressway",
      // TODO: confirm exact travel times and best highway exit
      desc: "Exit via the Southern Expressway (Imaduwa or Pinnaduwa) and follow the road through Udugama and Neluwa towards Dellawa. (Approx. 1.5 to 2 hours drive).",
    },
    {
      step: "02",
      mode: "From Colombo",
      // TODO: confirm exact expressway route duration
      desc: "Take the Southern Expressway towards Galle/Matara. Exit towards Neluwa. The scenic mountain drive passes tea plantations and green hills.",
    },
    {
      step: "03",
      mode: "Arrival at Dellawa",
      // TODO: confirm last-mile landmark
      desc: "When approaching Dellawa village, follow local signposts towards the riverbank. Free private vehicle parking is located directly on our grounds.",
    },
  ];

  const highlights = [
    {
      icon: <Trees className="w-5 h-5 text-[#C9A84C]" />,
      title: "Sinharaja Rainforest Region",
      desc: "Sri Lanka's world-famous primary rainforest is nearby, blessing our air with crisp freshness and rich birdlife.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#C9A84C]" />,
      title: "Local Red Tea Estates",
      desc: "The surrounding hillside is carpeted with lush tea gardens, creating quiet scenic paths for walks.",
    },
    {
      icon: <Navigation className="w-5 h-5 text-[#C9A84C]" />,
      title: "Natural River Waterway",
      desc: "The crystal clear river runs directly alongside our property, providing cool swimming and kayaking.",
    },
  ];

  return (
    <>
      <PageHeader
        label="Map & Routes"
        title="Location & Directions"
        description="Find your way to Dellawa, Neluwa, Galle. A scenic drive through lush green countryside."
        breadcrumbs={[{ label: "Location" }]}
        imageSrc="/images/hero/hero1.jpg"
        imageAlt="Aerial view of Dellawa village surroundings"
      />

      {/* Main Map & Address Section */}
      <section className="py-20 bg-[#071F1A]">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            
            {/* Address Details */}
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                align="left"
                label="Our Setting"
                title="Dellawa, Neluwa, Galle"
                description="Dellakkadawala Eco Resort is situated in a tranquil corner of Southern Sri Lanka, surrounded by greenery and bordered by a natural stream."
              />

              <div className="p-6 rounded-3xl glass-panel border border-[#C9A84C]/30 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C9A84C] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-lg text-[#F5F1E6]">Full Address</h3>
                    <p className="text-sm text-[#DDE5DD]/80 mt-1">
                      {siteConfig.contact.address.full}
                    </p>
                    <p className="text-xs text-[#A9BC95] mt-1">
                      {siteConfig.contact.address.landmark}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                  <Navigation className="w-5 h-5 text-[#C9A84C] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-lg text-[#F5F1E6]">Need Driving Help?</h3>
                    <p className="text-xs text-[#DDE5DD]/80 mt-0.5">
                      If you need directions while on the road, our team is happy to assist you.
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C9A84C] hover:underline mt-1.5 uppercase tracking-wider"
                    >
                      <span>Reach Our Team</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  size="md"
                  href={siteConfig.contact.googleMapsDirectionsUrl}
                  isExternal
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Get Directions on Google Maps
                </Button>
                <Button
                  variant="glass"
                  size="md"
                  href="/contact"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Contact Desk
                </Button>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="lg:col-span-7">
              <div className="w-full h-[450px] sm:h-[520px] rounded-3xl overflow-hidden glass-card border border-white/15 shadow-2xl relative">
                <iframe
                  title="Dellawa Neluwa Galle Map"
                  src={siteConfig.contact.googleMapsEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* How to Get Here Steps */}
          {/* TODO: confirm route directions and highway exit milestones with resort owner */}
          <div className="border-t border-[#DDE5DD]/10 pt-16 space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <SectionHeading
                label="Step-by-Step"
                title="How to Get Here"
                description="Follow these general directions when planning your drive to the resort."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {travelSteps.map((s) => (
                <div
                  key={s.step}
                  className="p-8 rounded-3xl glass-card border border-white/10 space-y-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#A9BC95] text-[#071F1A] font-serif font-bold text-xl flex items-center justify-center mb-4">
                      {s.step}
                    </div>
                    <h3 className="font-serif text-xl text-[#F5F1E6]">
                      {s.mode}
                    </h3>
                    <p className="text-xs text-[#DDE5DD]/80 leading-relaxed mt-2">
                      {s.desc}
                    </p>
                  </div>
                  <div className="text-[11px] text-[#A9BC95] italic">
                    Free on-site parking for all guests
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights in Area */}
          <div className="border-t border-[#DDE5DD]/10 pt-16 mt-16 space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <SectionHeading
                label="Surroundings"
                title="Nearby Nature Highlights"
                description="Dellawa offers a scenic landscape of tea gardens, rainforest borders, and clean running streams."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="p-6 rounded-3xl glass-panel border border-[#DDE5DD]/10 space-y-3"
                >
                  <div className="p-3 rounded-2xl bg-white/5 w-fit">
                    {h.icon}
                  </div>
                  <h3 className="font-serif text-xl text-[#F5F1E6] font-medium">
                    {h.title}
                  </h3>
                  <p className="text-xs text-[#DDE5DD]/75 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </Container>
      </section>
    </>
  );
}
