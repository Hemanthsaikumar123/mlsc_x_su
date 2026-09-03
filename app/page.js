"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import IntroAnimation from "@/components/IntroAnimation";
import Hero from "@/components/Hero";
import Announcements from "@/components/Announcements";
import HomeAbout from "@/components/HomeAbout";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="min-h-screen text-white">
      <AnimatePresence>
        {showIntro && (
          <IntroAnimation onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <Hero />
        <Announcements />
        <HomeAbout />
        <Testimonials />

      </div>
    </main>
  );
}