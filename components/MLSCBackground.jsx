// "use client";

// import { motion } from "framer-motion";

// export default function MLSCBackground() {
//   return (
//     <div className="pointer-events-none absolute inset-0 overflow-hidden">

//       {/* Base */}
//       <div className="absolute inset-0 bg-[#020817]" />

//       {/* Main MLSC blue atmosphere */}
//       <motion.div
//         className="absolute left-1/2 top-[35%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(8,117,225,0.16), rgba(8,117,225,0.04) 45%, transparent 70%)",
//           filter: "blur(20px)",
//         }}
//         animate={{
//           scale: [0.9, 1.08, 0.9],
//           opacity: [0.65, 1, 0.65],
//         }}
//         transition={{
//           duration: 9,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Top blue glow */}
//       <div
//         className="absolute -top-60 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full"
//         style={{
//           background:
//             "radial-gradient(ellipse, rgba(0,120,212,0.11), transparent 65%)",
//           filter: "blur(60px)",
//         }}
//       />

//       {/* Left glow */}
//       <motion.div
//         className="absolute -left-48 top-[35%] h-[500px] w-[500px] rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(0,164,239,0.07), transparent 65%)",
//           filter: "blur(60px)",
//         }}
//         animate={{
//           y: [-30, 30, -30],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Right glow */}
//       <motion.div
//         className="absolute -right-48 bottom-[10%] h-[500px] w-[500px] rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(8,117,225,0.08), transparent 65%)",
//           filter: "blur(60px)",
//         }}
//         animate={{
//           y: [30, -30, 30],
//         }}
//         transition={{
//           duration: 11,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Technical grid */}
//       <div
//         className="absolute inset-0 opacity-[0.085]"
//         style={{
//           backgroundImage: `
//             linear-gradient(
//               rgba(120,190,255,0.12) 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               90deg,
//               rgba(120,190,255,0.12) 1px,
//               transparent 1px
//             )
//           `,
//           backgroundSize: "70px 70px",
//           maskImage:
//             "radial-gradient(circle at center, black 0%, transparent 75%)",
//           WebkitMaskImage:
//             "radial-gradient(circle at center, black 0%, transparent 75%)",
//         }}
//       />

//       {/* Network */}
//       <Network />

//       {/* Edge vignette */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "radial-gradient(circle at center, transparent 35%, rgba(2,8,23,0.65) 100%)",
//         }}
//       />

//     </div>
//   );
// }

// function Network() {
//   return (
//     <svg
//       className="absolute inset-0 h-full w-full opacity-30"
//       viewBox="0 0 1440 900"
//       preserveAspectRatio="none"
//     >
//       <defs>
//         <linearGradient id="networkLine">
//           <stop offset="0%" stopColor="#0875E1" stopOpacity="0" />
//           <stop offset="50%" stopColor="#50BFFF" stopOpacity="0.45" />
//           <stop offset="100%" stopColor="#0875E1" stopOpacity="0" />
//         </linearGradient>
//       </defs>

//       <motion.path
//         d="M0 230 C250 180 330 340 570 280 S950 100 1440 250"
//         fill="none"
//         stroke="url(#networkLine)"
//         strokeWidth="1"
//         strokeDasharray="4 12"
//         animate={{
//           strokeDashoffset: [0, -120],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       <motion.path
//         d="M0 680 C280 580 430 760 720 620 S1120 500 1440 650"
//         fill="none"
//         stroke="url(#networkLine)"
//         strokeWidth="1"
//         strokeDasharray="4 14"
//         animate={{
//           strokeDashoffset: [0, 120],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       <circle cx="570" cy="280" r="3" fill="#50BFFF" opacity="0.5" />
//       <circle cx="950" cy="100" r="2" fill="#50BFFF" opacity="0.4" />
//       <circle cx="720" cy="620" r="3" fill="#0875E1" opacity="0.5" />
//       <circle cx="1120" cy="500" r="2" fill="#50BFFF" opacity="0.4" />
//     </svg>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Direction: this is a Microsoft student community, so the signature borrows
 * from Microsoft's own current event/brand language (Build, Ignite, Fluent 2)
 * — a hard-edged, multi-stop "aurora" ribbon (blue → cyan → violet) cutting
 * across a dark surface — instead of the generic single-color blurred blob.
 * It's paired with real PCB-style circuit traces (right angles + via dots)
 * rather than a plain grid, since this is a tech-build community, not a
 * finance dashboard. One bold move (the ribbon), everything else disciplined.
 */
export default function MLSCBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-[#050810]" />

      {!isMobile && (
        <>
          {/* Signature: the aurora ribbon */}
          <AuroraRibbon />

          {/* Circuit trace linework */}
          <CircuitTraces />

          {/* Fine grain so the dark surface never looks like a flat export */}
          <Grain />
        </>
      )}

      {/* Edge vignette to pull focus back to content */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 65% at 50% 20%, transparent 30%, rgba(5,8,16,0.55) 75%, rgba(5,8,16,0.85) 100%)",
        }}
      />
    </div>
  );
}

function AuroraRibbon() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="mlsc-aurora" x1="0%" y1="0%" x2="100%" y2="30%">
          <stop offset="0%" stopColor="#0875E1" stopOpacity="0" />
          <stop offset="18%" stopColor="#0875E1" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#22C7F5" stopOpacity="0.6" />
          <stop offset="68%" stopColor="#7C5CFC" stopOpacity="0.5" />
          <stop offset="92%" stopColor="#7C5CFC" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="mlsc-aurora-soft" x1="0%" y1="0%" x2="100%" y2="20%">
          <stop offset="0%" stopColor="#0875E1" stopOpacity="0" />
          <stop offset="30%" stopColor="#0875E1" stopOpacity="0.2" />
          <stop offset="60%" stopColor="#22C7F5" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#7C5CFC" stopOpacity="0" />
        </linearGradient>
        <filter id="mlsc-ribbon-blur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="22" />
        </filter>
        <filter id="mlsc-ribbon-blur-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="55" />
        </filter>
      </defs>

      {/* wide soft under-glow so the ribbon reads as light, not a sticker */}
      <motion.path
        d="M-200 560 C 220 420, 520 560, 760 380 S 1260 120, 1680 260"
        fill="none"
        stroke="url(#mlsc-aurora-soft)"
        strokeWidth="260"
        strokeLinecap="round"
        filter="url(#mlsc-ribbon-blur-soft)"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* the defined ribbon core */}
      <motion.path
        d="M-200 560 C 220 420, 520 560, 760 380 S 1260 120, 1680 260"
        fill="none"
        stroke="url(#mlsc-aurora)"
        strokeWidth="120"
        strokeLinecap="round"
        filter="url(#mlsc-ribbon-blur)"
        animate={{
          d: [
            "M-200 560 C 220 420, 520 560, 760 380 S 1260 120, 1680 260",
            "M-200 540 C 240 460, 540 520, 780 400 S 1240 160, 1680 240",
            "M-200 560 C 220 420, 520 560, 760 380 S 1260 120, 1680 260",
          ],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* crisp thin edge line to give the ribbon a defined spine, Fluent-style */}
      <motion.path
        d="M-200 560 C 220 420, 520 560, 760 380 S 1260 120, 1680 260"
        fill="none"
        stroke="#BFEFFF"
        strokeOpacity="0.35"
        strokeWidth="1.5"
        strokeLinecap="round"
        animate={{ opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

// Real PCB-style traces: right-angle segments with chamfered corners and via
// dots — sparse and intentional, not a tiled generic grid.
const TRACES = [
  "M 60 120 H 220 L 250 150 V 320 L 280 350 H 460",
  "M 1380 90 H 1180 L 1150 120 V 240 L 1120 270 H 940",
  "M 90 780 H 260 L 290 750 V 610 L 320 580 H 520",
  "M 1360 760 H 1160 L 1130 730 V 560",
];

const VIAS = [
  { x: 220, y: 120 }, { x: 250, y: 150 }, { x: 280, y: 350 },
  { x: 1180, y: 90 }, { x: 1150, y: 120 }, { x: 1120, y: 270 },
  { x: 260, y: 780 }, { x: 290, y: 750 }, { x: 320, y: 580 },
  { x: 1160, y: 760 }, { x: 1130, y: 730 },
];

function CircuitTraces() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.16]"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {TRACES.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="#7CC4FF" strokeWidth="1.25" />
      ))}
      {VIAS.map((v, i) => (
        <circle key={i} cx={v.x} cy={v.y} r="3" fill="none" stroke="#7CC4FF" strokeWidth="1.25" />
      ))}
    </svg>
  );
}

function Grain() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.04] mix-blend-soft-light"
      aria-hidden
    >
      <filter id="mlsc-grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#mlsc-grain)" />
    </svg>
  );
}