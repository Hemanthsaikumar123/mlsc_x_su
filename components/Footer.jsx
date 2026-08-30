"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = [
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "Journey", href: "/journey" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] bg-[#020817]">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">

        <div className="grid gap-12 md:grid-cols-[1fr_auto]">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <img
                src="/images/mlsc-su-logo.png"
                alt="MLSC × SU"
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/30">
              Microsoft Learn Student Community at
              Siddhartha University — learning, building
              and growing together.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/25">
              Explore
            </p>

            <div className="mt-5 grid grid-cols-2 gap-x-10 gap-y-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/40 transition hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[10px] text-white/20">
            © {new Date().getFullYear()} MLSC × SU. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            {/* Replace these hrefs with official chapter links */}
            <a
              href="#"
              className="group flex items-center gap-1 text-[10px] uppercase tracking-[0.15em] text-white/25 transition hover:text-white"
            >
              LinkedIn
              <ArrowUpRight
                size={11}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#"
              className="group flex items-center gap-1 text-[10px] uppercase tracking-[0.15em] text-white/25 transition hover:text-white"
            >
              Instagram
              <ArrowUpRight
                size={11}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#"
              className="group flex items-center gap-1 text-[10px] uppercase tracking-[0.15em] text-white/25 transition hover:text-white"
            >
              GitHub
              <ArrowUpRight
                size={11}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}