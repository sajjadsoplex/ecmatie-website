"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "App", href: "#app" },
  { label: "Founder", href: "#founder" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto mt-4 max-w-7xl px-4 sm:px-6">
        <nav className="rounded-2xl border border-slate-200/70 bg-white/75 px-4 py-3 shadow-[0_15px_50px_rgba(7,27,58,0.08)] backdrop-blur-xl">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a href="#" className="flex items-center">
              <Image
                src="/brand/logo.png"
                alt="ECMatie — Your Education and Career Mate"
                width={125}
                height={52}
                className="h-10 w-auto object-contain"
                priority
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-7 md:flex">

              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-[#1769e0]"
                >
                  {item.label}
                </a>
              ))}

              {/* Install ECMatie */}
              <a
                href="#closed-testing"
                className="
                  rounded-full
                  bg-[#071b3a]
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  !text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#0b315f]
                "
              >
                <span className="!text-white">
                  Install ECMatie
                </span>
              </a>

            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-[#071b3a] md:hidden"
              aria-label="Toggle navigation"
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {open && (
            <div className="mt-4 border-t border-slate-200 pt-4 md:hidden">
              <div className="flex flex-col gap-2">

                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    {item.label}
                  </a>
                ))}

                {/* Mobile Install Button */}
                <a
                  href="#closed-testing"
                  onClick={() => setOpen(false)}
                  className="
                    mt-2
                    rounded-xl
                    bg-[#071b3a]
                    px-4
                    py-3
                    text-center
                    text-sm
                    font-semibold
                    !text-white
                  "
                >
                  <span className="!text-white">
                    Install ECMatie
                  </span>
                </a>

              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}