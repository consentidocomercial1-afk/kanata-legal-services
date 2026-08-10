"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Plane,
  Building2,
  FileCheck,
  Globe,
} from "lucide-react";

interface ProgramCardProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

const icons = {
  briefcase: Briefcase,
  graduation: GraduationCap,
  plane: Plane,
  building: Building2,
  filecheck: FileCheck,
  globe: Globe,
};

export default function ProgramCard({
  icon,
  title,
  description,
  href = "#",
}: ProgramCardProps) {

  const Icon =
    icons[icon as keyof typeof icons] ?? Briefcase;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="h-full"
    >
      <Link
        href={href}
        className="
          group
          relative
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-[30px]
          border
          border-neutral-200
          bg-white
          p-8
          transition-all
          duration-500
          hover:border-red-600
        "
      >
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50">
          <Icon className="h-8 w-8 text-red-600" />
        </div>

        <h3 className="text-2xl font-semibold text-neutral-900">
          {title}
        </h3>

        <p className="mt-5 leading-7 text-neutral-600">
          {description}
        </p>

        <div className="mt-auto flex items-center gap-2 pt-10 font-semibold text-red-600">
          Learn More

          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </div>

        <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-red-600 transition-all duration-500 group-hover:w-full" />
      </Link>
    </motion.div>
  );
}