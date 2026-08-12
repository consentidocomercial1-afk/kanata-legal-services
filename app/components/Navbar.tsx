"use client";

import { useState } from "react";
import { Menu, X, Scale } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Events", href: "/events" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 text-red-700 transition hover:opacity-90"
        >
          <Scale className="h-9 w-9" />

          <div>
            <h2 className="text-3xl font-bold leading-none">
              KanataLegal
            </h2>

            <span className="text-xs uppercase tracking-[0.35em] opacity-70">
              Immigration Services
            </span>
          </div>
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-neutral-700 transition hover:text-red-600"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-red-700 px-7 py-3 font-semibold text-white transition hover:bg-red-800"
          >
            Book Consultation
          </a>
        </nav>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="text-neutral-900 lg:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white shadow-xl lg:hidden">
          <div className="flex flex-col gap-5 p-6">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-medium text-neutral-700 transition hover:text-red-600"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-red-700 py-3 text-center font-semibold text-white transition hover:bg-red-800"
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}