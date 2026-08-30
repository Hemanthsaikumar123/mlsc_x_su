"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-24 md:py-32">

      <div className="mx-auto max-w-7xl px-5 md:px-8">

        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#50BFFF]">
              From the community
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Voices of MLSC
            </h2>
          </div>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-5 snap-x snap-mandatory scrollbar-none">

          {testimonials.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="min-w-[85%] snap-center rounded-3xl border border-white/[0.07] bg-[#061326]/50 p-7 backdrop-blur-xl md:min-w-[420px] md:p-9"
            >

              <Quote
                size={22}
                className="text-[#1688F5]"
              />

              <p className="mt-8 text-base leading-8 text-white/55">
                "{item.quote}"
              </p>

              <div className="mt-8 border-t border-white/[0.07] pt-5">
                <p className="text-sm font-medium text-white/75">
                  {item.name}
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/25">
                  {item.role}
                </p>
              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}