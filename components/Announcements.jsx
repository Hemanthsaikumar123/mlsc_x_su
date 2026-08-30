"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bell, ChevronRight } from "lucide-react";
import Link from "next/link";
import { announcements } from "@/data/announcements";

export default function Announcements() {
  return (
    <section className="relative bg-[#020817] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        <div className="flex items-end justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <Bell
                size={14}
                className="text-[#50BFFF]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#50BFFF]">
                Announcements
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              What's happening
            </h2>
          </div>
        </div>

        <div className="mt-10 divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {announcements.map((announcement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group flex items-center justify-between gap-6 py-6"
            >
              <div className="flex min-w-0 items-start gap-5">

                <span className="mt-1 hidden min-w-[80px] text-[9px] font-semibold uppercase tracking-[0.2em] text-[#50BFFF]/60 sm:block">
                  {announcement.type}
                </span>

                <div>
                  <h3 className="text-sm font-medium text-white/80 transition group-hover:text-white md:text-base">
                    {announcement.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-white/30">
                    {announcement.description}
                  </p>
                </div>

              </div>

              <Link
                href={announcement.href}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-white/25 transition group-hover:border-[#1688F5]/30 group-hover:text-[#50BFFF]"
              >
                <ChevronRight size={15} />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}