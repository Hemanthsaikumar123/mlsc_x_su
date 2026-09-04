"use client";

import { motion } from "framer-motion";
import { Bell } from "lucide-react";
import { announcements } from "@/data/announcements";

export default function Announcements() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-end justify-between"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <Bell
                size={13}
                strokeWidth={1.8}
                className="text-[#59C4F7]"
              />

              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#59C4F7]">
                Announcements
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-[-0.04em] text-white md:text-5xl">
              What's happening
            </h2>
          </div>
        </motion.div>

        {/* ANNOUNCEMENTS */}
        <div className="border-t border-white/[0.08]">
          {announcements.map((announcement, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="border-b border-white/[0.08]"
            >
              <div className="grid min-h-[110px] items-center gap-6 py-6 md:grid-cols-[70px_1fr] md:px-5">

                {/* INDEX */}
                <span className="text-[10px] font-black tracking-[0.15em] text-[#59C4F7]/40">
                  0{index + 1}
                </span>

                {/* CONTENT */}
                <div>
                  <h3 className="text-sm font-semibold text-white/85 md:text-base">
                    {announcement.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-xs leading-5 text-white/45 md:text-sm">
                    {announcement.description}
                  </p>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}