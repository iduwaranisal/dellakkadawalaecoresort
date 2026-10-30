import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Explore river bathing, gentle kayaking, relaxing day outs, nature trails, and small group gatherings at Dellakkadawala Eco Resort.",
};

export default function ExperiencesPage() {
  return (
    <>
      <PageHeader
        label="Things to Do"
        title="Experiences & Activities"
        description="Every moment here is connected to the river and the rainforest. Choose how you spend your day."
        breadcrumbs={[{ label: "Experiences" }]}
        imageSrc="/images/hero/hero3.jpg"
        imageAlt="Kayaks on the misty river at Dellakkadawala"
      />

      <section className="py-20 md:py-28 bg-[#071F1A]">
        <Container size="default">
          <div className="space-y-24">
            {siteConfig.experiences.map((exp, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={exp.id}
                  id={exp.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl group">
                      <Image
                        src={exp.image}
                        alt={exp.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071F1A]/70 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-5 left-5 px-4 py-1.5 rounded-full bg-[#071F1A]/80 backdrop-blur-md border border-[#C9A84C]/40 text-xs font-semibold text-[#C9A84C] uppercase tracking-wider">
                        {exp.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-6 space-y-5 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="inline-flex items-center gap-2">
                      <span className="font-mono text-xs text-[#C9A84C] font-semibold tracking-widest">
                        0{idx + 1}
                      </span>
                      <span className="w-8 h-[1px] bg-[#C9A84C]" />
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A9BC95]">
                        Experience
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F5F1E6] font-normal">
                      {exp.title}
                    </h2>

                    <p className="text-base text-[#DDE5DD]/90 leading-relaxed">
                      {exp.description}
                    </p>

                    <p className="text-sm text-[#DDE5DD]/75 leading-relaxed pt-1">
                      {exp.details}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Button
                        variant="primary"
                        size="md"
                        href="/contact"
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Reserve Your Day
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
