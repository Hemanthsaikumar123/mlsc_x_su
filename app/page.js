// "use client";

// import { useState } from "react";

// import IntroAnimation from "@/components/IntroAnimation";
// import Navbar from "@/components/Navbar";
// import MLSCBackground from "@/components/MLSCBackground";
// import Hero from "@/components/Hero";
// import Announcements from "@/components/Announcements";
// import HomeAbout from "@/components/HomeAbout";
// import Testimonials from "@/components/Testimonials";
// import MembershipCTA from "@/components/MembershipCTA";

// export default function Home() {
//   const [showIntro, setShowIntro] = useState(true);

//   return (
//     <main className="min-h-screen bg-[#020817] text-white">

//       {showIntro && (
//         <IntroAnimation
//           onComplete={() => setShowIntro(false)}
//         />
//       )}

//       <div className="relative overflow-hidden">

//         <MLSCBackground />

//         <Navbar />

//         <Hero />

//         <Announcements />

//         <HomeAbout />

//         <Testimonials />

//         <MembershipCTA />

//       </div>

//     </main>
//   );
// }


"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import IntroAnimation from "@/components/IntroAnimation";
import Hero from "@/components/Hero";
import Announcements from "@/components/Announcements";
import HomeAbout from "@/components/HomeAbout";
import Testimonials from "@/components/Testimonials";
import MembershipCTA from "@/components/MembershipCTA";

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
        <MembershipCTA />
      </div>
    </main>
  );
}