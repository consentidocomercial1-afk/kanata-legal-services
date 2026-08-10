"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Building2,
  UsersRound,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Work in Canada",
    description:
      "Explore work permit options and pathways to build your future in Canada.",
    icon: BriefcaseBusiness,
    href: "/services/work-in-canada",
  },
  {
    title: "Study in Canada",
    description:
      "Get guidance through your Canadian study permit journey and educational opportunities.",
    icon: GraduationCap,
    href: "/services/study-in-canada",
  },
  {
    title: "Business Immigration",
    description:
      "Discover immigration solutions designed for entrepreneurs and business owners.",
    icon: Building2,
    href: "/services/business-immigration",
  },
  {
    title: "Family Sponsorship",
    description:
      "Helping families reunite in Canada through personalized sponsorship solutions.",
    icon: UsersRound,
    href: "/services/family-sponsorship",
  },
  {
    title: "Skilled Immigration",
    description:
      "Find the right pathway for skilled workers seeking permanent residence in Canada.",
    icon: BadgeCheck,
    href: "/services/skilled-immigration",
  },
  {
    title: "Refugee Claims",
    description:
      "Legal guidance and representation for complex refugee and protection matters.",
    icon: ShieldCheck,
    href: "/services/refugee-claims",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-neutral-50 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Our Services
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Canadian Immigration Pathways
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Personalized legal guidance for individuals, families, students,
            workers and entrepreneurs seeking opportunities in Canada.
          </p>
        </motion.div>

        {/* Services Grid */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
              >
                <Link
                  href={service.href}
                  className="
                    group
                    relative
                    flex
                    min-h-[320px]
                    flex-col
                    overflow-hidden
                    rounded-[26px]
                    border
                    border-neutral-200
                    bg-white
                    p-7
                    transition-all
                    duration-500
                    hover:-translate-y-1.5
                    hover:border-red-600/50
                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)]
                  "
                >
                  {/* Icon */}

                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-red-50">
                    <Icon className="h-6 w-6 text-red-600" />
                  </div>

                  {/* Title */}

                  <h3 className="mt-11 text-2xl font-semibold tracking-tight text-neutral-900">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 max-w-md leading-7 text-neutral-600">
                    {service.description}
                  </p>

                  {/* Link */}

                  <div className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold text-red-600">
                    Explore Service

                    <ArrowUpRight
                      className="
                        h-4 w-4
                        transition-transform
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                      "
                    />
                  </div>

                  {/* Bottom Accent */}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[3px]
                      w-0
                      bg-red-600
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Section Transition */}

        <div className="mt-20 h-px bg-neutral-200" />
      </div>
    </section>
  );
}