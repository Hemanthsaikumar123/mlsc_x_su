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
            border border-white/[0.11]
            bg-[#081321]/90
            px-4
            shadow-[0_8px_35px_rgba(0,0,0,0.22)]
            backdrop-blur-xl
            md:px-6
          "
        >

          {/* LOGO */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center">
              <img
                src="/images/mlsc-su-logo.png"
                alt="MLSC × SU"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="hidden h-7 w-px bg-white/[0.12] sm:block" />

            <div className="hidden sm:block">
              <p
                className="
                  text-[15px] font-bold
                  leading-tight tracking-[-0.02em]
                  text-white
                "
              >
                MLSC
              </p>

              <p className="mt-0.5 text-[11px] leading-tight text-white/40">
                Siddhartha University
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const active = isActive(link.href);
              const Icon = link.icon;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    group relative
                    flex items-center gap-2.5
                    px-3.5 py-2.5
                    text-[13px] font-medium
                    tracking-[-0.01em]
                    transition-all duration-200
                    ${
                      active
                        ? "text-[#59C4F7]"
                        : "text-white/60 hover:text-white"
                    }
                  `}
                >
                  <Icon
                    size={16}
                    strokeWidth={1.7}
                    className={`
                      transition-transform duration-200
                      ${
                        active
                          ? "text-[#59C4F7]"
                          : "text-white/45 group-hover:text-white/75"
                      }
                    `}
                  />

                  <span>{link.name}</span>

                  {/* ACTIVE INDICATOR */}
                  <span
                    className={`
                      absolute bottom-0.5 left-3 right-3
                      h-px bg-[#59C4F7]
                      transition-transform duration-300
                      ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="
              flex h-10 w-10
              items-center justify-center
              border border-white/[0.12]
              text-white/70
              transition-all duration-200
              hover:border-[#59C4F7]/40
              hover:text-[#59C4F7]
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
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-2
                overflow-hidden
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
                          ? "bg-[#59C4F7]/[0.09] text-[#59C4F7]"
                          : "text-white/60 hover:bg-white/[0.04] hover:text-white"
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

                    {link.name}
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