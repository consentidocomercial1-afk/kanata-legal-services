"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@kanatalegal.ca",
    href: "mailto:info@kanatalegal.ca",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "(437) 223-3174",
    href: "tel:+14372233174",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "33 Raymond Street, St. Catharines, ON L2R 2T3",
    href: null,
  },
];

const services = [
  "Work in Canada",
  "Study in Canada",
  "Business Immigration",
  "Family Sponsorship",
  "Skilled Immigration",
  "Refugee Claims",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Start Your Journey
            </span>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Let’s Discuss Your Canadian Immigration Goals.
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-8 text-neutral-600">
              Every immigration journey is different. Our team provides
              personalized guidance to help you understand your options and
              move forward with confidence.
            </p>

            {/* Contact Information */}

            <div className="mt-12 space-y-7">

              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white">
                      <Icon className="h-5 w-5 text-red-600" />
                    </div>

                    <div>
                      <p className="text-sm text-neutral-500">
                        {item.title}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block max-w-sm font-medium text-neutral-900 transition-colors hover:text-red-600"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 max-w-sm font-medium leading-7 text-neutral-900">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}

            </div>
          </motion.div>

          {/* Right — Contact Form */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="rounded-[32px] border border-neutral-200 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.04)] sm:p-9 lg:p-12"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
                Request a Consultation
              </h3>

              <p className="mt-2 text-neutral-600">
                Tell us a little about your immigration goals and our team
                will get back to you.
              </p>
            </div>

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();

                alert(
                  "Thank you! Your consultation request has been received. A member of our team will contact you shortly."
                );
              }}
            >
              {/* Full Name */}

              <div>
                <label
                  htmlFor="full-name"
                  className="mb-2 block text-sm font-medium text-neutral-900"
                >
                  Full Name
                </label>

                <input
                  id="full-name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="h-14 w-full rounded-xl border border-neutral-200 bg-white px-5 text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                />
              </div>

              {/* Email + Phone */}

              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-neutral-900"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Email address"
                    required
                    className="h-14 w-full rounded-xl border border-neutral-200 bg-white px-5 text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-neutral-900"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone number"
                    className="h-14 w-full rounded-xl border border-neutral-200 bg-white px-5 text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  />
                </div>

              </div>

              {/* Immigration Service */}

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium text-neutral-900"
                >
                  Immigration Service
                </label>

                <select
                  id="service"
                  defaultValue=""
                  required
                  className="h-14 w-full rounded-xl border border-neutral-200 bg-white px-5 text-neutral-700 outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-neutral-900"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your immigration goals"
                  required
                  className="w-full resize-none rounded-xl border border-neutral-200 bg-white p-5 text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="group flex h-14 w-full items-center justify-center gap-3 rounded-full bg-red-600 font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20"
              >
                Request Consultation

                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}