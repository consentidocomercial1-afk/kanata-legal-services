"use client";

import { motion } from "framer-motion";
import ProgramCard from "./ProgramCard";

export interface Program {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

interface ProgramsGridProps {
  title?: string;
  subtitle?: string;
  programs: Program[];
}

export default function ProgramsGrid({
  title = "Programs Included",
  subtitle = "Explore the immigration pathways and legal services available under this category.",
  programs,
}: ProgramsGridProps) {
  return (
    <section className="py-28 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Programs
          </span>

          <h2 className="mt-5 text-5xl font-semibold tracking-tight text-neutral-900">
            {title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            {subtitle}
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <ProgramCard {...program} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}