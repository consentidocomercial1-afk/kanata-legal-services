import Link from "next/link";
import {
  Scale,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    name: "Work in Canada",
    href: "/services/work-in-canada",
  },
  {
    name: "Study in Canada",
    href: "/services/study-in-canada",
  },
  {
    name: "Business Immigration",
    href: "/services/business-immigration",
  },
  {
    name: "Family Sponsorship",
    href: "/services/family-sponsorship",
  },
  {
    name: "Skilled Immigration",
    href: "/services/skilled-immigration",
  },
  {
    name: "Refugee Claims",
    href: "/services/refugee-claims",
  },
];

const navigation = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-[#111111] text-neutral-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Main Footer */}

        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.5fr_0.8fr_1.2fr_1fr] lg:gap-16">

          {/* Brand */}

          <div>
            <Link
              href="#home"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-red-600/10 group-hover:ring-red-600/30">
                <Scale className="h-6 w-6 text-red-600" />
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  Kanata<span className="text-red-600">Legal</span>
                </h2>

                <p className="mt-0.5 text-[10px] uppercase tracking-[0.28em] text-neutral-500">
                  Immigration Services
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-neutral-400">
              Professional Canadian immigration legal services for workers,
              students, families and businesses seeking opportunities across
              Canada.
            </p>

            <Link
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-red-500"
            >
              Start Your Immigration Journey

              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>

            <nav className="mt-6 space-y-3.5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm transition-colors duration-200 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Services
            </h3>

            <nav className="mt-6 grid grid-cols-1 gap-3.5">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="group flex items-center text-sm transition-colors duration-200 hover:text-white"
                >
                  <span>{service.name}</span>

                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <a
                href="mailto:info@kanatalegal.ca"
                className="group flex items-start gap-3 text-sm transition-colors duration-200 hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />

                <span className="break-all">
                  info@kanatalegal.ca
                </span>
              </a>

              <a
                href="tel:+14372233174"
                className="group flex items-start gap-3 text-sm transition-colors duration-200 hover:text-white"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />

                <span>
                  (437) 223-3174
                </span>
              </a>

              <div className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />

                <span className="leading-6 text-neutral-400">
                  33 Raymond Street
                  <br />
                  St. Catharines, ON
                  <br />
                  L2R 2T3
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-neutral-800 py-7">
          <div className="flex flex-col gap-3 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()} Kanata Legal Services. All rights
              reserved.
            </p>

            <p>
              Canadian Immigration Legal Services.
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
}