"use client";

import { motion } from "motion/react";
import { categories, type Category } from "@/data/photos";

interface CategoryFilterProps {
  active: Category;
  onChange: (category: Category) => void;
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => onChange(cat.key)}
          className={`relative px-5 py-2 text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
            active === cat.key ? "text-foreground" : "text-muted hover:text-foreground"
          }`}
        >
          {active === cat.key && (
            <motion.span
              layoutId="category-active"
              className="absolute inset-0 rounded-full border border-accent/50 bg-accent/5"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{cat.label}</span>
        </button>
      ))}
    </div>
  );
}
