"use client";

import { motion } from "framer-motion";

interface ServiceHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function ServiceHero({
  eyebrow,
  title,
  description,
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-32 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            {eyebrow}
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight lg:text-7xl">
            {title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
            {description}
          </p>
        </motion.div>

      </div>
    </section>
  );
}