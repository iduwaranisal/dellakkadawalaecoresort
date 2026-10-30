import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "View authentic photos of Dellakkadawala Eco Resort: clean natural river streams, kayaks, eco cottages, bedrooms, and dining patio.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        label="Photographs"
        title="Resort Gallery"
        description="Authentic photographs of Dellakkadawala Eco Resort, from the running waters of the river to our quiet guest rooms and evening patio."
        breadcrumbs={[{ label: "Gallery" }]}
        imageSrc="/images/hero/hero1.jpg"
        imageAlt="Aerial view of Dellakkadawala Eco Resort"
      />

      <section className="py-20 md:py-28 bg-[#071F1A]">
        <Container size="default">
          <GalleryGrid />
        </Container>
      </section>
    </>
  );
}

