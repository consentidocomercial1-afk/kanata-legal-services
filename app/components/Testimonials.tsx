"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

const slideshowImages = [
  "/images/testimonials/family-1.jpg",
  "/images/testimonials/family-2.jpg",
  "/images/testimonials/family-3.jpg",
  "/images/testimonials/family-4.jpg",
  "/images/testimonials/family-5.jpg",
  "/images/testimonials/family-6.jpg",
];

const reviews = [
  {
    id: 1,
    name: "Yunaris Lancys López",
    type: "Immigration Services",
    text:
      "La eficiencia, rapidez y responsabilidad de estos abogados fueron excepcionales. El proceso de visado desde Cuba hasta obtener el visado solo tardó 22 días.",
    link: "https://share.google/IwaMOuxZ7Mqb3afTI",
  },
  {
    id: 2,
    name: "Andrea Canul",
    type: "Open Work Permit",
    text:
      "Krista aclaró mis dudas antes de iniciar el proceso, eso me dio la confianza para trabajar con ellos. Fueron muy pacientes y siempre se aseguraron de darme la información adecuada.",
    link: "https://share.google/IwaMOuxZ7Mqb3afTI",
  },
  {
    id: 3,
    name: "Mohamed Suliman",
    type: "Immigration Services",
    text:
      "She is knowledgeable, intelligent, confident, friendly, and passionate about her client cases. I would highly recommend her and her law firm to my closest friends and family.",
    link: "https://share.google/IwaMOuxZ7Mqb3afTI",
  },
];

export default function Testimonials() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        (previous) => (previous + 1) % slideshowImages.length
      );
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header + Image */}

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Trusted Reviews
            </span>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Trusted by Families Across Canada.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              Real experiences from clients who trusted Kanata Legal Services
              with their Canadian immigration journey.
            </p>

            {/* Google Rating */}

            <div className="mt-8 flex flex-wrap items-center gap-4">

              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 fill-red-600 text-red-600"
                  />
                ))}
              </div>

              <span className="font-semibold text-neutral-900">
                4.8 Google Rating
              </span>

              <span className="text-neutral-400">
                •
              </span>

              <span className="text-neutral-600">
                129 reviews
              </span>

            </div>

            <Link
              href="https://share.google/IwaMOuxZ7Mqb3afTI"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 text-base font-semibold text-red-600 transition hover:text-red-700"
            >
              View all Google Reviews

              <ArrowUpRight
                className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* Image Slideshow */}

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[460px] overflow-hidden rounded-[28px] sm:h-[520px]"
          >
            <AnimatePresence mode="wait">

              <motion.div
                key={currentImage}
                initial={{
                  opacity: 0,
                  scale: 1,
                }}
                animate={{
                  opacity: 1,
                  scale: 1.06,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 1.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >
                <Image
                  src={slideshowImages[currentImage]}
                  alt="Kanata Legal Services"
                  fill
                  priority={currentImage === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/10" />
              </motion.div>

            </AnimatePresence>

            <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-neutral-200" />
          </motion.div>

        </div>

        {/* Reviews */}

        <div className="mt-16 grid gap-6 lg:grid-cols-3">

          {reviews.map((review, index) => (

            <motion.article
              key={review.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-neutral-200
                bg-white
                p-7
                transition-all
                duration-500
                hover:border-red-600/40
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]
              "
            >

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

              {/* Stars */}

              <div className="mb-5 flex gap-1">

                {[1, 2, 3, 4, 5].map((star) => (

                  <Star
                    key={star}
                    className="h-4 w-4 fill-red-600 text-red-600"
                  />

                ))}

              </div>

              {/* Review */}

              <p className="text-[16px] leading-7 text-neutral-700">
                “{review.text}”
              </p>

              {/* Client */}

              <div className="mt-7 border-t border-neutral-100 pt-5">

                <h3 className="font-semibold text-neutral-900">
                  {review.name}
                </h3>

                <p className="mt-1 text-sm text-neutral-500">
                  {review.type}
                </p>

                <Link
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition hover:text-red-700"
                >
                  View on Google Reviews

                  <ArrowUpRight className="h-4 w-4" />
                </Link>

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}