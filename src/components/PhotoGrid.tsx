"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import type { Photo } from "@/data/photos";

interface PhotoGridProps {
  photos: Photo[];
  onPhotoClick: (index: number) => void;
}

export function PhotoGrid({ photos, onPhotoClick }: PhotoGridProps) {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      <AnimatePresence mode="popLayout">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative cursor-pointer overflow-hidden"
            onClick={() => onPhotoClick(index)}
          >
            <div className="relative aspect-[3/2] w-full overflow-hidden bg-surface">
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/80 via-background/20 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="text-[10px] tracking-[0.3em] uppercase text-accent">
                  {photo.category === "mountains" && "山岳"}
                  {photo.category === "ocean" && "海洋"}
                  {photo.category === "forest" && "森林"}
                  {photo.category === "starscape" && "星空"}
                  {photo.category === "sunset" && "日落"}
                </span>
                <h3 className="mt-1 font-serif text-xl font-light tracking-wide text-foreground">
                  {photo.title}
                </h3>
                <p className="mt-1 text-xs text-muted line-clamp-2">
                  {photo.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
