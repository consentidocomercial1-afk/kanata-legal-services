"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Phone,
  CheckCircle2,
} from "lucide-react";

interface ServiceCTAProps {
  contactHref?: string;
}

export default function ServiceCTA({
  contactHref = "#contact",
}: ServiceCTAProps) {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[36px] bg-[#111111] px-8 py-14 text-white sm:px-10 lg:px-20 lg:py-20"
        >
          {/* Subtle Red Glow */}

          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-red-600/10 blur-[140px]" />

          <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-red-600/5 blur-[120px]" />

          <div className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

            {/* Left */}

            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
                Ready to Begin?
              </span>

              <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Let's Build Your
                <br />
                Canadian Future.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-300">
                Speak directly with an experienced Canadian immigration
                professional and receive a personalized legal strategy
                designed around your goals.
              </p>
            </div>

            {/* Right */}

            <div>
              <div className="mb-10 space-y-5">
                {[
                  "Personalized Immigration Strategy",
                  "Fast Response Times",
                  "Transparent Legal Guidance",
                  "Secure & Confidential Process",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-red-500" />

                    <span className="text-lg text-neutral-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">

                <a
                  href={contactHref}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-red-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-red-700"
                >
                  <Calendar className="h-5 w-5" />

                  Book Consultation

                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="tel:+14372233174"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition-all duration-300 hover:border-red-500 hover:text-red-400"
                >
                  <Phone className="h-5 w-5" />

                  Call Us
                </a>

              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}