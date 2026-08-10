"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Hero() {
  const stats = [
    {
      number: "15+",
      label: "Years Experience",
    },
    {
      number: "500+",
      label: "Families Assisted",
    },
    {
      number: "100%",
      label: "Personalized Guidance",
    },
  ];

  const services = [
    "Work Permits",
    "Permanent Residency",
    "Family Sponsorship",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black"
    >

      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>


      {/* Cinematic Overlay */}

      <div className="absolute inset-0 bg-black/55" />

      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/30
          via-black/40
          to-black/80
        "
      />


      {/* Content */}

      <div className="relative z-10 flex min-h-screen items-center">

        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            px-6
            pt-24
            pb-12
            lg:px-8
          "
        >

          <div className="max-w-4xl">


            {/* Eyebrow */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                mb-6
                text-sm
                font-semibold
                uppercase
                tracking-[0.35em]
                text-red-500
              "
            >
              Canadian Immigration Experts
            </motion.p>



            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="
                max-w-4xl
                text-5xl
                font-black
                leading-[0.98]
                tracking-tight
                text-white
                sm:text-6xl
                lg:text-8xl
              "
            >
              Building Your Future
              <br />
              in Canada
              <br />
              Starts Here.
            </motion.h1>



            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-gray-200
                md:text-xl
              "
            >
              Professional Canadian Immigration Services for
              families, workers, students and businesses.
            </motion.p>



            {/* Buttons */}

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="
                mt-10
                flex
                flex-col
                gap-5
                sm:flex-row
              "
            >

              <a
                href="#contact"
                className="
                  rounded-full
                  bg-red-700
                  px-8
                  py-4
                  text-center
                  text-base
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-red-800
                "
              >
                Book Consultation
              </a>


              <a
                href="#services"
                className="
                  rounded-full
                  border
                  border-white/70
                  px-8
                  py-4
                  text-center
                  text-base
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:text-black
                "
              >
                Explore Services
              </a>

            </motion.div>

          </div>



          {/* Bottom Information */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="
              mt-16
              flex
              flex-col
              gap-8
              border-t
              border-white/20
              pt-8
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >


            {/* Service Highlights */}

            <div
              className="
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:gap-8
              "
            >

              {services.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-gray-200
                  "
                >

                  <span
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-red-700
                    "
                  >
                    <Check
                      size={12}
                      strokeWidth={3}
                    />
                  </span>

                  {item}

                </div>
              ))}

            </div>



            {/* Stats */}

            <div
              className="
                grid
                grid-cols-3
                gap-5
                sm:gap-10
              "
            >

              {stats.map((stat) => (
                <div
                  key={stat.label}
                >

                  <p
                    className="
                      text-2xl
                      font-bold
                      text-white
                      sm:text-3xl
                    "
                  >
                    {stat.number}
                  </p>


                  <p
                    className="
                      mt-1
                      text-[10px]
                      uppercase
                      tracking-wider
                      text-gray-300
                      sm:text-xs
                    "
                  >
                    {stat.label}
                  </p>

                </div>
              ))}

            </div>


          </motion.div>


        </div>

      </div>

    </section>
  );
}