import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, Heart, Home as HomeIcon, ShieldCheck, AlertCircle, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Dellakkadawala Eco Resort in Dellawa, Neluwa. Our peaceful story, green values, and guide to visiting responsibly.",
};

export default function AboutPage() {
  const values = [
    {
      icon: <Leaf className="w-6 h-6 text-[#C9A84C]" />,
      title: "Nature First",
      desc: "We live beside a living river. We protect the trees, the stream bank, and the freshwater life that thrives here.",
    },
    {
      icon: <Heart className="w-6 h-6 text-[#C9A84C]" />,
      title: "Peace and Rest",
      desc: "Our resort is designed without rush or loud noises. We encourage quiet rest, gentle walks, and genuine family time.",
    },
    {
      icon: <HomeIcon className="w-6 h-6 text-[#C9A84C]" />,
      title: "Local Village Life",
      desc: "Dellawa is a warm, unhurried community surrounded by red tea hills. We celebrate local hospitality and respect our neighbors.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#C9A84C]" />,
      title: "Care for the Environment",
      desc: "We practice simple, low-impact hospitality with natural materials, natural airflow, and continuous care for the water.",
    },
  ];

  return (
    <>
      <PageHeader
        label="Our Story & Heart"
        title="About Dellakkadawala"
        description="A quiet village retreat in Neluwa, built for peaceful days by running river water and misty rainforest hills."
        breadcrumbs={[{ label: "About" }]}
        imageSrc="/images/hero/hero2.jpg"
        imageAlt="Traditional cottage at Dellakkadawala Eco Resort"
      />

      {/* Main Story */}
      <section className="py-20 md:py-28 bg-[#071F1A]">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                align="left"
                label="How We Began"
                title="Simple Hospitality, Rooted in Nature"
              />
              <div className="space-y-4 text-base text-[#DDE5DD]/85 leading-relaxed">
                <p>
                  Dellakkadawala Eco Resort was created from a love for the serene countryside of Dellawa, Neluwa, near the southern borders of the Sinharaja Rainforest region.
                </p>
                <p>
                  The resort stands right where a natural freshwater stream runs through lush greenery. Here, morning mist gathers over the water, and birds call through tall tropical canopies.
                </p>
                <p>
                  We believe true luxury is not about noisy attractions, but rather about stillness, clean river water to swim in, fresh air to breathe, and simple comforts shared with the people you love.
                </p>
              </div>

              <div className="pt-2">
                <Button variant="primary" size="md" href="/experiences">
                  Explore Experiences
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl">
                <Image
                  src="/images/gallery/img 3.jpg"
                  alt="Scenic upper balcony view of the trees and distant hills"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 rounded-2xl glass-panel border border-[#C9A84C]/30 text-xs text-[#F5F1E6] leading-relaxed">
                <p className="font-serif text-base text-[#C9A84C] mb-1">
                  A Quiet Promise
                </p>
                When you visit Dellakkadawala, we make sure you have the space and peace to slow down completely.
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-[#0E3B2F]/35">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionHeading
              label="What Matters to Us"
              title="Our Core Values"
              description="Guided by simple principles that respect nature and honor our guests."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-3xl glass-card border border-white/10 space-y-4 flex flex-col justify-between hover:border-[#C9A84C]/50 transition-colors"
              >
                <div className="p-3 rounded-2xl bg-white/5 w-fit">
                  {v.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl text-[#F5F1E6]">
                    {v.title}
                  </h3>
                  <p className="text-xs text-[#DDE5DD]/75 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Visit Responsibly Box */}
      <section className="py-20 bg-[#071F1A]">
        <Container size="narrow">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border-2 border-[#C9A84C]/40 shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]">
                <AlertCircle className="w-6 h-6 text-[#C9A84C]" />
              </div>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F1E6]">
                  Visit Responsibly
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C]">
                  Help Us Keep Dellawa Beautiful
                </p>
              </div>
            </div>

            <p className="text-sm text-[#DDE5DD]/90 leading-relaxed">
              We are blessed to be next to an unpolluted natural river. We kindly ask all our guests to follow three simple requests during their visit:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="font-serif text-lg text-[#C9A84C] font-semibold">01</span>
                <h4 className="text-sm font-medium text-[#F5F1E6]">Keep River Clean</h4>
                <p className="text-xs text-[#DDE5DD]/70 leading-relaxed">
                  Please do not use chemical soaps, shampoo, or glass bottles in the river stream.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="font-serif text-lg text-[#C9A84C] font-semibold">02</span>
                <h4 className="text-sm font-medium text-[#F5F1E6]">Take Your Waste</h4>
                <p className="text-xs text-[#DDE5DD]/70 leading-relaxed">
                  Dispose of all polythene, plastic wrappers, and tins in our provided bins.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="font-serif text-lg text-[#C9A84C] font-semibold">03</span>
                <h4 className="text-sm font-medium text-[#F5F1E6]">Respect the Quiet</h4>
                <p className="text-xs text-[#DDE5DD]/70 leading-relaxed">
                  Keep music at gentle levels so everyone and the local wildlife enjoy the peace.
                </p>
              </div>
            </div>

            <div className="pt-4 text-center">
              <Button
                variant="primary"
                size="md"
                href="/contact"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Plan Your Visit With Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

