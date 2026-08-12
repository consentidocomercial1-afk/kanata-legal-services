"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === "/";
  const isServices = pathname === "/services" || pathname.startsWith("/services/");
  const isEvents = pathname === "/events";

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-6 lg:px-10">
        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="group flex shrink-0 items-center"
          aria-label="Kanata Legal Services Home"
        >
          <div className="flex items-center gap-3">
            {/* Scales Icon */}
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
              aria-hidden="true"
            >
              <path
                d="M21 6V33"
                stroke="#C90000"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M13 10H29"
                stroke="#C90000"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M13 10L7 23"
                stroke="#C90000"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M29 10L35 23"
                stroke="#C90000"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M4.5 23H9.5"
                stroke="#C90000"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M32.5 23H37.5"
                stroke="#C90000"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M7 23C7 27.4183 10.5817 31 15 31C19.4183 31 23 27.4183 23 23"
                stroke="#C90000"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 23C19 27.4183 22.5817 31 27 31C31.4183 31 35 27.4183 35 23"
                stroke="#C90000"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 33V36"
                stroke="#C90000"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M27 33V36"
                stroke="#C90000"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M11 36H31"
                stroke="#C90000"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Brand Text */}
            <div className="leading-none">
              <div className="text-[29px] font-bold tracking-[-0.045em] text-[#C90000]">
                KanataLegal
              </div>

              <div className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.38em] text-[#C90000]/75">
                Immigration Services
              </div>
            </div>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="hidden items-center gap-9 lg:flex"
          aria-label="Main navigation"
        >
          {/* HOME */}
          <Link
            href="/"
            className={`relative py-2 text-[16px] font-medium transition-colors ${
              isHome
                ? "text-[#C90000]"
                : "text-neutral-800 hover:text-[#C90000]"
            }`}
          >
            Home

            {isHome && (
              <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#C90000]" />
            )}
          </Link>

          {/* SERVICES */}
          <Link
            href="/services"
            className={`relative py-2 text-[16px] font-medium transition-colors ${
              isServices
                ? "text-[#C90000]"
                : "text-neutral-800 hover:text-[#C90000]"
            }`}
          >
            Services

            {isServices && (
              <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#C90000]" />
            )}
          </Link>

          {/* EVENTS */}
          <Link
            href="/events"
            className={`relative py-2 text-[16px] font-medium transition-colors ${
              isEvents
                ? "text-[#C90000]"
                : "text-neutral-800 hover:text-[#C90000]"
            }`}
          >
            Events

            {isEvents && (
              <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#C90000]" />
            )}
          </Link>

          {/* TESTIMONIALS */}
          <Link
            href="/#testimonials"
            className="py-2 text-[16px] font-medium text-neutral-800 transition-colors hover:text-[#C90000]"
          >
            Testimonials
          </Link>

          {/* CONTACT */}
          <Link
            href="/#contact"
            className="py-2 text-[16px] font-medium text-neutral-800 transition-colors hover:text-[#C90000]"
          >
            Contact
          </Link>

          {/* BOOK CONSULTATION */}
          <Link
            href="/#contact"
            className="ml-1 inline-flex items-center justify-center rounded-full bg-[#C90000] px-8 py-4 text-[16px] font-semibold text-white transition-all duration-300 hover:bg-[#A80000] hover:shadow-[0_12px_30px_rgba(201,0,0,0.20)]"
          >
            Book Consultation
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-900 transition hover:border-neutral-300 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className="sr-only">
            {mobileOpen ? "Close menu" : "Open menu"}
          </span>

          <div className="flex w-5 flex-col gap-[5px]">
            <span
              className={`block h-[2px] w-full bg-neutral-900 transition-transform duration-300 ${
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />

            <span
              className={`block h-[2px] w-full bg-neutral-900 transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`block h-[2px] w-full bg-neutral-900 transition-transform duration-300 ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className={`overflow-hidden border-t border-neutral-100 bg-white transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav
          className="mx-auto flex max-w-[1440px] flex-col px-6 py-5"
          aria-label="Mobile navigation"
        >
          {/* HOME */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className={`border-b border-neutral-100 py-4 text-[17px] font-medium transition-colors ${
              isHome ? "text-[#C90000]" : "text-neutral-900"
            }`}
          >
            Home
          </Link>

          {/* SERVICES */}
          <Link
            href="/services"
            onClick={closeMobileMenu}
            className={`border-b border-neutral-100 py-4 text-[17px] font-medium transition-colors ${
              isServices ? "text-[#C90000]" : "text-neutral-900"
            }`}
          >
            Services
          </Link>

          {/* EVENTS */}
          <Link
            href="/events"
            onClick={closeMobileMenu}
            className={`border-b border-neutral-100 py-4 text-[17px] font-medium transition-colors ${
              isEvents ? "text-[#C90000]" : "text-neutral-900"
            }`}
          >
            Events
          </Link>

          {/* TESTIMONIALS */}
          <Link
            href="/#testimonials"
            onClick={closeMobileMenu}
            className="border-b border-neutral-100 py-4 text-[17px] font-medium text-neutral-900 transition-colors hover:text-[#C90000]"
          >
            Testimonials
          </Link>

          {/* CONTACT */}
          <Link
            href="/#contact"
            onClick={closeMobileMenu}
            className="border-b border-neutral-100 py-4 text-[17px] font-medium text-neutral-900 transition-colors hover:text-[#C90000]"
          >
            Contact
          </Link>

          {/* BOOK CONSULTATION */}
          <Link
            href="/#contact"
            onClick={closeMobileMenu}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-[#C90000] px-7 py-4 text-[16px] font-semibold text-white transition-all duration-300 hover:bg-[#A80000]"
          >
            Book Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}