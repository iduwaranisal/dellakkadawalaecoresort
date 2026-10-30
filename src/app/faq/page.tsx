import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/faq/FaqAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about Dellakkadawala Eco Resort: activities, parking, family suitability, what to bring, and booking details.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        label="Help & Information"
        title="Frequently Asked Questions"
        description="Everything you need to know before visiting Dellakkadawala Eco Resort in Dellawa, Neluwa."
        breadcrumbs={[{ label: "FAQ" }]}
        imageSrc="/images/hero/hero3.jpg"
        imageAlt="Misty river at Dellakkadawala"
      />

      <section className="py-20 md:py-28 bg-[#071F1A]">
        <Container size="default">
          <FaqAccordion />
        </Container>
      </section>
    </>
  );
}

