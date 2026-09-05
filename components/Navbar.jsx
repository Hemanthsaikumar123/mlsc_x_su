"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  House,
  Info,
  CalendarDays,
  Users,
  Clock3,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    href: "/",
    icon: House,
  },
  {
    name: "About",
    href: "/about",
    icon: Info,
  },
  {
    name: "Events",
    href: "/events",
    icon: CalendarDays,
  },
  {
    name: "Team",
    href: "/team",
    icon: Users,
  },
  {
    name: "Our Story",
    href: "/ourstory",
    icon: Clock3,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 md:px-8 md:pt-6">

        {/* NAVBAR */}
        <nav
          className="
            flex h-[70px] items-center justify-between
            rounded-xl
            border border-white/[0.11]
            bg-[#081321]/90
            px-3
            shadow-[0_8px_35px_rgba(0,0,0,0.22)]
            backdrop-blur-xl
            sm:px-4
            md:px-6
          "
        >

          {/* LOGO + BRAND */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 sm:gap-3"
          >
            {/* LOGO */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center sm:h-11 sm:w-11">
              <img
                src="/images/mlsc-su-logo.png"
                alt="MLSC × SU"
                className="h-full w-full object-contain"
              />
            </div>

            {/* DIVIDER */}
            <div className="hidden h-7 w-px bg-white/[0.12] sm:block" />

            {/* BRAND TEXT */}
            <div className="block">
              <p
                className="
                  text-[14px] font-bold
                  leading-tight tracking-[-0.02em]
                  text-white
                  sm:text-[15px]
                "
              >
                MLSC
              </p>

              <p
                className="
                  mt-0.5
                  text-[9px]
                  leading-tight
                  text-white/40
                  sm:text-[11px]
                "
              >
                Siddhartha University
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-5 md:flex">
            {links.map((link) => {
              const active = isActive(link.href);
              const Icon = link.icon;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    flex items-center gap-2
                    text-[13px] font-medium
                    tracking-[-0.01em]
                    transition-colors duration-200
                    ${
                      active
                        ? "text-blue-500"
                        : "text-white/55 hover:text-white"
                    }
                  `}
                >
                  <Icon
                    size={16}
                    strokeWidth={1.7}
                    className={
                    active
                      ? "bg-[#0D1D30] text-blue-500"
                      : "text-white/55 hover:text-white"
                    }
                  />

                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="
              flex h-10 w-10
              shrink-0
              items-center justify-center
              rounded-lg
              border border-white/[0.12]
              text-white/70
              transition-colors duration-200
              hover:text-white
              md:hidden
            "
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{
                  opacity: 0,
                  rotate: -45,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 45,
                  scale: 0.8,
                }}
                transition={{ duration: 0.18 }}
                className="flex"
              >
                {open ? (
                  <X size={21} strokeWidth={1.7} />
                ) : (
                  <Menu size={21} strokeWidth={1.7} />
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              transition={{
                duration: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-2
                overflow-hidden
                rounded-xl
                border border-white/[0.10]
                bg-[#081321]/96
                p-2
                backdrop-blur-xl
                md:hidden
              "
            >
              {links.map((link) => {
                const active = isActive(link.href);
                const Icon = link.icon;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`
                      flex items-center gap-3
                      px-4 py-3.5
                      text-[14px] font-medium
                      transition-colors duration-200
                      ${
                        active
                          ? "text-[#59C4F7]"
                          : "text-white/60 hover:text-white"
                      }
                    `}
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.7}
                      className={
                        active
                          ? "text-[#59C4F7]"
                          : "text-white/40"
                      }
                    />

                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}