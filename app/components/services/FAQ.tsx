"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
}

export default function FAQ({
  title = "Frequently Asked Questions",
  subtitle = "Answers to some of the most common questions about this immigration pathway.",
  items,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            FAQ
          </span>

          <h2 className="mt-5 text-5xl font-semibold tracking-tight text-neutral-900">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            {subtitle}
          </p>
        </motion.div>

        <div className="space-y-5">

          {items.map((item, index) => {

            const isOpen = openIndex === index;

            return (

              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
                className="overflow-hidden rounded-[26px] border border-neutral-200 bg-white"
              >

                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-7 text-left"
                >

                  <span className="text-lg font-semibold text-neutral-900">
                    {item.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-red-600" : ""
                    }`}
                  />

                </button>

                <AnimatePresence>

                  {isOpen && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: .3,
                      }}
                    >

                      <div className="border-t border-neutral-100 px-8 py-7 text-neutral-600 leading-8">
                        {item.answer}
                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}