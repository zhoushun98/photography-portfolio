"use client";

import Image from "next/image";
import Link from "next/link";
import { photos } from "@/data/photos";
import { ScrollReveal } from "./ScrollReveal";

const featured = photos.filter((p) => p.featured);

export function FeaturedGallery() {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-20 text-center">
            <h2 className="font-serif text-4xl font-light tracking-[0.15em] text-foreground md:text-5xl">
              精选作品
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-accent" />
          </div>
        </ScrollReveal>

        <div className="space-y-16">
          {featured.map((photo, i) => (
            <ScrollReveal
              key={photo.id}
              delay={i * 0.1}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`group relative flex flex-col gap-8 md:flex-row md:items-center ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[3/2] w-full overflow-hidden md:w-2/3">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-background/10 transition-opacity duration-500 group-hover:opacity-0" />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-3 md:w-1/3">
                  <span className="text-xs tracking-[0.3em] uppercase text-accent">
                    {photo.category === "mountains" && "山岳"}
                    {photo.category === "ocean" && "海洋"}
                    {photo.category === "forest" && "森林"}
                    {photo.category === "starscape" && "星空"}
                    {photo.category === "sunset" && "日落"}
                  </span>
                  <h3 className="font-serif text-3xl font-light tracking-wide text-foreground">
                    {photo.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {photo.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-24 text-center">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-muted transition-colors duration-300 hover:text-accent"
          >
            查看全部作品
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
