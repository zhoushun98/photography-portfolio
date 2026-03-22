"use client";

import { useState, useMemo, useCallback } from "react";
import { AnimatePresence } from "motion/react";
import { photos, type Category } from "@/data/photos";
import { CategoryFilter } from "@/components/CategoryFilter";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Lightbox } from "@/components/Lightbox";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? photos
        : photos.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const prevPhoto = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filtered.length) % filtered.length : null
    );
  }, [filtered.length]);

  const nextPhoto = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filtered.length : null
    );
  }, [filtered.length]);

  return (
    <div className="pt-28 pb-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h1 className="font-serif text-4xl font-light tracking-[0.15em] text-foreground md:text-5xl">
              作品集
            </h1>
            <div className="mx-auto mt-4 h-px w-16 bg-accent" />
            <p className="mt-6 text-sm text-muted">
              用镜头记录自然的壮美与宁静
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-12">
            <CategoryFilter
              active={activeCategory}
              onChange={setActiveCategory}
            />
          </div>
        </ScrollReveal>

        <PhotoGrid photos={filtered} onPhotoClick={openLightbox} />

        <AnimatePresence>
          {lightboxIndex !== null && (
            <Lightbox
              photos={filtered}
              currentIndex={lightboxIndex}
              onClose={closeLightbox}
              onPrev={prevPhoto}
              onNext={nextPhoto}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
