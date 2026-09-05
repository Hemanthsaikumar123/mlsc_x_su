// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { domains } from "@/data/domains";

// // const domains = [
// //   "Competitive Programming",
// //   "Web",
// //   "Cloud",
// //   "Advanced Tech",
// //   "Marketing",
// //   "Digital Creation",
// //   "AI",
// // ];

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative flex min-h-screen items-center overflow-hidden"
//     >
//       <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pt-40">
//         <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
//           {/* LEFT */}
//           <div>
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.15, duration: 0.7 }}
//               className="mb-7 flex items-center gap-3"
//             >
//               <span className="h-px w-9 bg-[#3E7BFA]" />

//               <span className="text-[11px] font-medium tracking-[0.1em] text-[#49D6E8]">
//                 Microsoft Learn Student Community · Siddhartha University
//               </span>
//             </motion.div>

//             {/* HEADING */}
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.9 }}
//               className="max-w-4xl text-6xl font-bold leading-[0.92] tracking-[-0.055em] text-white md:text-8xl lg:text-[104px]"
//             >
//               Learn.
//               <br />

//               <span className="bg-gradient-to-r from-white via-[#9DDEFF] to-[#1688F5] bg-clip-text text-transparent">
//                 Build.
//               </span>

//               <br />

//               Innovate.
//             </motion.h1>

//             {/* DESCRIPTION */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.55, duration: 0.8 }}
//               className="mt-8 max-w-xl text-base leading-7 text-white/75 md:text-lg"
//             >
//               A student-led technology community at Siddhartha University,
//               bringing curious minds together to learn, build real-world
//               projects and create meaningful impact.
//             </motion.p>

          
//             {/* CTA */}
// <motion.div
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ delay: 0.8, duration: 0.7 }}
//   className="mt-9"
// >
//   <a
//     href="#events"
//     className="
//       group inline-flex items-center gap-4
//       border border-[#59C4F7]/60
//       bg-[#59C4F7]
//       px-6 py-3.5
//       text-[#02050B]
//       transition-all duration-300
//       hover:border-[#8DDEFF]
//       hover:bg-[#7AD4FA]
//     "
//   >
//     <span className="text-[11px] font-black uppercase tracking-[0.16em]">
//       Explore Events
//     </span>

//     <ArrowRight
//       size={16}
//       strokeWidth={2}
//       className="
//         transition-transform duration-300
//         group-hover:translate-x-1
//       "
//     />
//   </a>
// </motion.div>
//           </div>

//           {/* RIGHT */}
//           <LogoVisual />
//         </div>
//       </div>
//     </section>
//   );
// }

// function LogoVisual() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.88 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{
//         delay: 0.55,
//         duration: 1.1,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className="relative mx-auto h-[470px] w-full max-w-[520px]"
//     >
//       {/* Main aura */}
//       <motion.div
//         className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(62,123,250,0.20), transparent 68%)",
//           filter: "blur(35px)",
//         }}
//         animate={{
//           scale: [0.9, 1.08, 0.9],
//           opacity: [0.6, 0.85, 0.6],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Outer ring */}
//       <motion.div
//         className="absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#59C4F7]/10"
//         animate={{ rotate: 360 }}
//         transition={{
//           duration: 35,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       {/* Inner dashed ring */}
//       <motion.div
//         className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#59C4F7]/15"
//         animate={{ rotate: -360 }}
//         transition={{
//           duration: 28,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       {/* Connection lines */}
//       <DomainConnections />

//       {/* Domain labels */}
//       {/* 01 — Competitive Programming */}
// <DomainNode
//   text={domains[0].name}
//   className="left-[-10px] top-[58px] md:left-[-22px]"
//   delay={0.9}
// />

// {/* 02 — Web */}
// <DomainNode
//   text={domains[1].name}
//   className="right-[12px] top-[78px] md:right-[8px]"
//   delay={1}
// />

// {/* 03 — Cloud */}
// <DomainNode
//   text={domains[2].name}
//   className="right-[-8px] top-[205px] md:right-[-18px]"
//   delay={1.1}
// />

// {/* 04 — Advanced Tech */}
// <DomainNode
//   text={domains[3].name}
//   className="right-[12px] bottom-[92px] md:right-[0px]"
//   delay={1.2}
// />

// {/* 05 — Marketing */}
// <DomainNode
//   text={domains[4].name}
//   className="bottom-[25px] left-1/2 -translate-x-1/2"
//   delay={1.3}
// />

// {/* 06 — Digital Creation */}
// <DomainNode
//   text={domains[5].name}
//   className="bottom-[88px] left-[5px] md:left-[-5px]"
//   delay={1.4}
// />

// {/* 07 — AI */}
// <DomainNode
//   text={domains[6].name}
//   className="left-[-4px] top-[210px] md:left-[-14px]"
//   delay={1.5}
// />

// {/* 08 — UI/UX */}
// <DomainNode
//   text={domains[7].name}
//   className="top-[25px] left-1/2 -translate-x-1/2"
//   delay={1.6}
// />

//       {/* Logo */}
//       <motion.div
//         className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
//         animate={{ y: [-5, 5, -5] }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         <div className="relative">
//           <div className="absolute inset-0 rounded-[35px] bg-[#3E7BFA]/20 blur-3xl" />

//           <img
//             src="/images/mlsc-su-logo.png"
//             alt="Microsoft Learn Student Community - Siddhartha University"
//             className="relative h-[250px] w-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.45)] md:h-[320px]"
//           />
//         </div>
//       </motion.div>

//     </motion.div>
//   );
// }

// /* -------------------------------- */
// /* DOMAIN NODE                       */
// /* -------------------------------- */

// function DomainNode({ text, className, delay }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 8 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         delay,
//         duration: 0.6,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className={`absolute z-20 ${className}`}
//     >
//       <div className="flex items-center gap-2">
//         <span className="h-1.5 w-1.5 rounded-full bg-[#59C4F7] shadow-[0_0_10px_rgba(89,196,247,0.5)]" />

//         <span className="whitespace-nowrap border border-white/[0.08] bg-[#071321]/75 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-white/45 backdrop-blur-md md:text-[9px]">
//           {text}
//         </span>
//       </div>
//     </motion.div>
//   );
// }

// /* -------------------------------- */
// /* CONNECTION NETWORK                */
// /* -------------------------------- */

// function DomainConnections() {
//   return (
//     <svg
//       className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
//       viewBox="0 0 520 470"
//       fill="none"
//       aria-hidden="true"
//     >
//       {/* left upper */}
//       <path
//         d="M70 90 L155 145"
//         stroke="#59C4F7"
//         strokeOpacity="0.12"
//         strokeWidth="1"
//       />

//       {/* right upper */}
//       <path
//         d="M450 105 L365 145"
//         stroke="#59C4F7"
//         strokeOpacity="0.12"
//         strokeWidth="1"
//       />

//       {/* right middle */}
//       <path
//         d="M470 235 L370 235"
//         stroke="#59C4F7"
//         strokeOpacity="0.12"
//         strokeWidth="1"
//       />

//       {/* right lower */}
//       <path
//         d="M450 365 L360 315"
//         stroke="#59C4F7"
//         strokeOpacity="0.12"
//         strokeWidth="1"
//       />

//       {/* bottom */}
//       <path
//         d="M260 430 L260 350"
//         stroke="#59C4F7"
//         strokeOpacity="0.12"
//         strokeWidth="1"
//       />

//       {/* left lower */}
//       <path
//         d="M75 365 L155 315"
//         stroke="#59C4F7"
//         strokeOpacity="0.12"
//         strokeWidth="1"
//       />

//       {/* left middle */}
//       <path
//         d="M55 235 L150 235"
//         stroke="#59C4F7"
//         strokeOpacity="0.12"
//         strokeWidth="1"
//       />

//       {/* connection nodes */}
//       <circle cx="155" cy="145" r="2" fill="#59C4F7" fillOpacity="0.5" />
//       <circle cx="365" cy="145" r="2" fill="#59C4F7" fillOpacity="0.5" />
//       <circle cx="370" cy="235" r="2" fill="#59C4F7" fillOpacity="0.5" />
//       <circle cx="360" cy="315" r="2" fill="#59C4F7" fillOpacity="0.5" />
//       <circle cx="260" cy="350" r="2" fill="#59C4F7" fillOpacity="0.5" />
//       <circle cx="155" cy="315" r="2" fill="#59C4F7" fillOpacity="0.5" />
//       <circle cx="150" cy="235" r="2" fill="#59C4F7" fillOpacity="0.5" />
//     </svg>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { domains } from "@/data/domains";
import ShinyText from "@/components/ShinyText";
import Lightfall from "@/components/Lightfall";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#02050B]"
    >
      {/* =====================================================
          LIGHTFALL BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 z-0 hidden md:block">
        <Lightfall
          colors={["#59C4F7", "#1688F5", "#08264A"]}
          backgroundColor="#02050B"
          speed={0.6}
          streakCount={6}
          streakWidth={1.5}
          streakLength={1.5}
          glow={1}
          density={0.2}
          twinkle={1.5}
          zoom={2.5}
          backgroundGlow={0.7}
          opacity={0.8}
          mouseInteraction={false}
          mouseStrength={1.2}
          mouseRadius={0.7}
        />
      </div>

      {/* Slight dark overlay so content stays readable */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#02050B]/20" />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

          {/* =================================================
              LEFT
          ================================================= */}

          <div>

            {/* Eyebrow */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-9 bg-[#59C4F7]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#59C4F7]">
                Microsoft Learn Student Community
              </span>
            </motion.div>


            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="
                max-w-4xl
                text-6xl
                font-bold
                leading-[0.92]
                tracking-[-0.055em]
                text-white
                md:text-8xl
                lg:text-[104px]
              "
            >
              Learn.
              <br />

              <ShinyText text="Build." />

              <br />

              Innovate.
            </motion.h1>


            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="
                mt-8
                max-w-xl
                text-base
                leading-7
                text-white/50
                md:text-lg
              "
            >
              A student-led technology community at Siddhartha
              University, bringing curious minds together to learn,
              build real-world projects and create meaningful impact.
            </motion.p>


            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="mt-9"
            >
              <a
                href="#events"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  border
                  border-[#59C4F7]/60
                  bg-[#59C4F7]
                  px-6
                  py-3.5
                  text-[#02050B]
                  transition-all
                  duration-300
                  hover:border-[#8DDEFF]
                  hover:bg-[#7AD4FA]
                "
              >
                <span className="text-[11px] font-black uppercase tracking-[0.16em]">
                  Explore Events
                </span>

                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>
            </motion.div>

          </div>


          {/* =================================================
              RIGHT
          ================================================= */}

          <LogoVisual />

        </div>
      </div>


      {/* =====================================================
          BOTTOM HINT
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="
          absolute
          bottom-8
          left-1/2
          hidden
          -translate-x-1/2
          items-center
          gap-3
          text-[9px]
          uppercase
          tracking-[0.35em]
          text-white/25
          md:flex
        "
      >
        <span
          className="
            h-8
            w-px
            bg-gradient-to-b
            from-transparent
            via-[#59C4F7]
            to-transparent
          "
        />

        Explore the community
      </motion.div>
    </section>
  );
}


/* ============================================================
   LOGO VISUAL
============================================================ */

function LogoVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.55,
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        mx-auto
        h-[470px]
        w-full
        max-w-[520px]
      "
    >

      {/* =====================================================
          MAIN AURA
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[340px]
          w-[340px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
        "
        style={{
          background:
            "radial-gradient(circle, rgba(89,196,247,0.15) 0%, rgba(22,136,245,0.10) 48%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          scale: [0.9, 1.1, 0.9],
          opacity: [0.55, 0.8, 0.55],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      {/* =====================================================
          OUTER RING
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[390px]
          w-[390px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-[#59C4F7]/16
        "
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      />


      {/* =====================================================
          INNER DASHED RING
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[330px]
          w-[330px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-dashed
          border-[#59C4F7]/18
        "
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      />


      {/* =====================================================
          CONNECTION NETWORK
      ====================================================== */}

      <DomainConnections />


      {/* =====================================================
          DOMAIN NODES
      ====================================================== */}

      {/* 01 — Competitive Programming */}

      <DomainNode
        text={domains[0]?.name}
        className="left-[-10px] top-[58px] md:left-[-22px]"
        delay={0.9}
      />


      {/* 02 — Web */}

      <DomainNode
        text={domains[1]?.name}
        className="right-[12px] top-[78px] md:right-[8px]"
        delay={1}
      />


      {/* 03 — Cloud */}

      <DomainNode
        text={domains[2]?.name}
        className="right-[-8px] top-[205px] md:right-[-18px]"
        delay={1.1}
      />


      {/* 04 — Advanced Tech */}

      <DomainNode
        text={domains[3]?.name}
        className="right-[12px] bottom-[92px] md:right-[0px]"
        delay={1.2}
      />


      {/* 05 — Marketing */}

      <DomainNode
        text={domains[4]?.name}
        className="bottom-[25px] left-1/2 -translate-x-1/2"
        delay={1.3}
      />


      {/* 06 — Digital Creation */}

      <DomainNode
        text={domains[5]?.name}
        className="bottom-[88px] left-[5px] md:left-[-5px]"
        delay={1.4}
      />


      {/* 07 — AI */}

      <DomainNode
        text={domains[6]?.name}
        className="left-[-4px] top-[210px] md:left-[-14px]"
        delay={1.5}
      />


      {/* 08 — UI/UX */}

      <DomainNode
        text={domains[7]?.name}
        className="top-[25px] left-1/2 -translate-x-1/2"
        delay={1.6}
      />


      {/* =====================================================
          LOGO
      ====================================================== */}

      <LogoImage />

    </motion.div>
  );
}


/* ============================================================
   LOGO IMAGE
============================================================ */

function LogoImage() {
  return (
    <motion.div
      className="
        absolute
        left-1/2
        top-1/2
        z-10
        -translate-x-1/2
        -translate-y-1/2
      "
      animate={{
        y: [-6, 6, -6],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="relative flex items-center justify-center">

        {/* Core cyan backlight */}

        <div
          className="
            pointer-events-none
            absolute
            -inset-6
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle, rgba(89,196,247,0.38) 0%, rgba(22,136,245,0.24) 45%, rgba(8,38,74,0.10) 70%, transparent 80%)",
            filter: "blur(32px)",
          }}
        />


        {/* Ambient blue aura */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -inset-14
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle, rgba(22,136,245,0.24) 0%, rgba(8,117,225,0.12) 50%, transparent 75%)",
            filter: "blur(48px)",
          }}
          animate={{
            scale: [0.92, 1.08, 0.92],
            opacity: [0.65, 0.9, 0.65],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />


        {/* Vertical cyan light streak */}

        <div
          className="
            pointer-events-none
            absolute
            -bottom-16
            -top-16
            w-[2px]
            opacity-60
          "
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(89,196,247,0.8) 50%, transparent)",
            filter: "blur(1.5px)",
            boxShadow:
              "0 0 16px rgba(89,196,247,0.75)",
          }}
        />


        {/* MLSC × SU Logo */}

        <motion.img
          src="/images/mlsc-su-logo.png"
          alt="Microsoft Learn Student Community - Siddhartha University"
          className="
            relative
            h-[290px]
            w-auto
            object-contain
            md:h-[340px]
          "
          style={{
            filter: `
              drop-shadow(0 0 10px rgba(89, 196, 247, 0.70))
              drop-shadow(0 0 25px rgba(22, 136, 245, 0.55))
              drop-shadow(0 0 45px rgba(8, 117, 225, 0.28))
              drop-shadow(0 25px 45px rgba(0, 0, 0, 0.75))
            `,
          }}
        />

      </div>
    </motion.div>
  );
}


/* ============================================================
   DOMAIN NODE
============================================================ */

function DomainNode({ text, className, delay }) {
  if (!text) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`absolute z-20 ${className}`}
    >
      <div className="flex items-center gap-2">

        {/* Node */}

        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-[#59C4F7]
            shadow-[0_0_10px_rgba(89,196,247,0.5)]
          "
        />

        {/* Label */}

        <span
          className="
            whitespace-nowrap
            border
            border-[#59C4F7]/12
            bg-[#071321]/80
            px-3
            py-1.5
            text-[8px]
            font-semibold
            uppercase
            tracking-[0.12em]
            text-white/50
            backdrop-blur-md
            md:text-[9px]
          "
        >
          {text}
        </span>

      </div>
    </motion.div>
  );
}


/* ============================================================
   CONNECTION NETWORK
============================================================ */

function DomainConnections() {
  return (
    <svg
      className="
        pointer-events-none
        absolute
        inset-0
        z-[1]
        h-full
        w-full
      "
      viewBox="0 0 520 470"
      fill="none"
      aria-hidden="true"
    >

      {/* Left upper */}

      <path
        d="M70 90 L155 145"
        stroke="#59C4F7"
        strokeOpacity="0.12"
        strokeWidth="1"
      />


      {/* Right upper */}

      <path
        d="M450 105 L365 145"
        stroke="#59C4F7"
        strokeOpacity="0.12"
        strokeWidth="1"
      />


      {/* Right middle */}

      <path
        d="M470 235 L370 235"
        stroke="#59C4F7"
        strokeOpacity="0.12"
        strokeWidth="1"
      />


      {/* Right lower */}

      <path
        d="M450 365 L360 315"
        stroke="#59C4F7"
        strokeOpacity="0.12"
        strokeWidth="1"
      />


      {/* Bottom */}

      <path
        d="M260 430 L260 350"
        stroke="#59C4F7"
        strokeOpacity="0.12"
        strokeWidth="1"
      />


      {/* Left lower */}

      <path
        d="M75 365 L155 315"
        stroke="#59C4F7"
        strokeOpacity="0.12"
        strokeWidth="1"
      />


      {/* Left middle */}

      <path
        d="M55 235 L150 235"
        stroke="#59C4F7"
        strokeOpacity="0.12"
        strokeWidth="1"
      />


      {/* Connection nodes */}

      <circle
        cx="155"
        cy="145"
        r="2"
        fill="#59C4F7"
        fillOpacity="0.5"
      />

      <circle
        cx="365"
        cy="145"
        r="2"
        fill="#59C4F7"
        fillOpacity="0.5"
      />

      <circle
        cx="370"
        cy="235"
        r="2"
        fill="#59C4F7"
        fillOpacity="0.5"
      />

      <circle
        cx="360"
        cy="315"
        r="2"
        fill="#59C4F7"
        fillOpacity="0.5"
      />

      <circle
        cx="260"
        cy="350"
        r="2"
        fill="#59C4F7"
        fillOpacity="0.5"
      />

      <circle
        cx="155"
        cy="315"
        r="2"
        fill="#59C4F7"
        fillOpacity="0.5"
      />

      <circle
        cx="150"
        cy="235"
        r="2"
        fill="#59C4F7"
        fillOpacity="0.5"
      />

    </svg>
  );
}