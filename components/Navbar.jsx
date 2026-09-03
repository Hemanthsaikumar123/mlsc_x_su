// "use client";

// import { useState } from "react";
// import { Menu, X, ArrowUpRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const links = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Events", href: "/events" },
//   { name: "Team", href: "/team" },
//   { name: "Our Story", href: "/ourstory" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="fixed inset-x-0 top-0 z-50">
//       <div className="mx-auto max-w-7xl px-4 pt-4 md:px-8 md:pt-6">

//         <nav className="flex h-[68px] items-center justify-between rounded-2xl border border-white/[0.08] bg-[#041127]/75 px-4 shadow-[0_8px_40px_rgba(0,0,0,0.2)] backdrop-blur-2xl md:px-6">

//           {/* Logo */}
//           <a
//             href="#home"
//             className="flex items-center gap-3"
//           >
//             <img
//               src="/images/mlsc-su-logo.png"
//               alt="MLSC × SU"
//               className="h-12 w-auto object-contain"
//             />

//             <div className="hidden h-7 w-px bg-white/10 sm:block" />

//             <div className="hidden sm:block">
//               <p className="text-sm font-semibold tracking-tight text-white">
//                 MLSC
//               </p>

//               <p className="text-[9px] uppercase tracking-[0.18em] text-white/35">
//                 Siddhartha University
//               </p>
//             </div>
//           </a>

//           {/* Desktop navigation */}
//           <div className="hidden items-center gap-8 md:flex">
//             {links.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="relative text-[13px] font-medium text-white/50 transition-colors hover:text-white"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           {/* CTA */}
//           <a
//             href="#membership"
//             className="group hidden items-center gap-2 rounded-full bg-[#0875E1] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_0_25px_rgba(8,117,225,0.2)] transition-all hover:bg-[#1688F5] hover:shadow-[0_0_35px_rgba(8,117,225,0.35)] md:flex"
//           >
//             Join MLSC

//             <ArrowUpRight
//               size={15}
//               className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//             />
//           </a>

//           {/* Mobile */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="rounded-xl border border-white/10 p-2 text-white md:hidden"
//             aria-label="Toggle menu"
//           >
//             {open ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </nav>

//         {/* Mobile menu */}
//         <AnimatePresence>
//           {open && (
//             <motion.div
//               initial={{ opacity: 0, y: -10, height: 0 }}
//               animate={{ opacity: 1, y: 0, height: "auto" }}
//               exit={{ opacity: 0, y: -10, height: 0 }}
//               className="mt-2 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#041127]/95 p-3 backdrop-blur-2xl md:hidden"
//             >
//               {links.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setOpen(false)}
//                   className="block rounded-xl px-4 py-3 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
//                 >
//                   {link.name}
//                 </a>
//               ))}

//               <a
//                 href="#membership"
//                 onClick={() => setOpen(false)}
//                 className="mt-2 block rounded-xl bg-[#0875E1] px-4 py-3 text-center text-sm font-semibold text-white"
//               >
//                 Join MLSC
//               </a>
//             </motion.div>
//           )}
//         </AnimatePresence>

//       </div>
//     </header>
//   );
// }


"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "Our Story", href: "/ourstory" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 md:px-8 md:pt-6">
        <nav className="flex h-[68px] items-center justify-between rounded-2xl border border-white/[0.08] bg-[#041127]/75 px-4 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl md:px-6">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center">
              <img
                src="/images/mlsc-su-logo.png"
                alt="MLSC × SU"
                className="h-full w-full object-contain drop-shadow-[0_0_14px_rgba(8,117,225,0.35)]"
              />
            </div>

            <div className="hidden h-7 w-px bg-white/10 sm:block" />

            <div className="hidden sm:block">
              <p
                className="text-sm font-semibold leading-tight tracking-tight text-white"
                style={{ fontFamily: "var(--font-display, inherit)" }}
              >
                MLSC
              </p>
              <p className="text-[9px] uppercase leading-tight tracking-[0.18em] text-white/35">
                Siddhartha University
              </p>
            </div>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative px-3 py-2 text-[13px] font-medium text-white/50 transition-colors hover:text-white"
              >
                {link.name}
                <span className="absolute inset-x-3 -bottom-0.5 h-px origin-center scale-x-0 bg-gradient-to-r from-[#0875E1] to-[#50BFFF] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>



          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition-colors hover:bg-white/5 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ opacity: 0, rotate: -60 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 60 }}
                transition={{ duration: 0.18 }}
                className="flex"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#041127]/95 p-3 backdrop-blur-2xl md:hidden"
            >
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
                >
                  {link.name}
                </a>
              ))}


            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}