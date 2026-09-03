"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Maximize, Minimize } from "lucide-react";

const domainDescriptions = {
  "Cloud Computing": "Architecting scalable cloud solutions, deploying infrastructure, and exploring the boundless possibilities of GCP and AWS.",
  "Competitive Programming": "Mastering algorithms, optimizing time complexity, and competing to solve complex computational problems.",
  "Computer Vision": "Building models that can see, interpret, and understand the visual world through advanced image processing.",
  "Digital Creation": "Designing stunning user experiences, crafting digital art, and bringing creative ideas to life.",
  "Marketing": "Strategizing outreach, growing communities, and amplifying our brand's presence across all platforms.",
  "Machine Learning": "Training intelligent models, analyzing vast datasets, and exploring the frontiers of AI.",
  "Quantum Computing": "Exploring the fundamentals of quantum mechanics, qubits, and next-generation computational paradigms.",
  "UI/UX": "Creating intuitive, aesthetic, and user-centered interfaces for seamless digital experiences.",
  "Web Development": "Building robust, responsive, and modern full-stack web applications from the ground up."
};

export default function ProfileTooltip({ children, person, domainName }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);
  
  const [position, setPosition] = useState({ vertical: "top", horizontal: "center" });

  useEffect(() => {
    if (isHovered && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      let vertical = "top";
      let horizontal = "center";

      // If the tooltip would go off the top of the screen (assuming ~400px max height)
      if (rect.top < 400) {
        vertical = "bottom";
      }

      // If the tooltip would go off the right edge
      if (rect.left + 160 > windowWidth - 20) {
        horizontal = "right";
      } 
      // If the tooltip would go off the left edge
      else if (rect.left - 160 < 20) {
        horizontal = "left";
      }

      setPosition({ vertical, horizontal });
    }
  }, [isHovered]);

  return (
    <div 
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={containerRef}
    >
      {/* The trigger element */}
      {children}

      <AnimatePresence>
        {isHovered && person && person.image && (
          <motion.div
            initial={{ opacity: 0, y: position.vertical === "top" ? 10 : -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: position.vertical === "top" ? 10 : -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute z-50 flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#061326]/95 p-4 shadow-2xl backdrop-blur-xl ${
              isExpanded ? "w-96" : "w-60"
            } ${
              position.vertical === "top" ? "bottom-full mb-4" : "top-full mt-4"
            } ${
              position.horizontal === "right" 
                ? "right-0" 
                : position.horizontal === "left" 
                  ? "left-0" 
                  : "left-1/2 -translate-x-1/2"
            }`}
          >
            {/* Expand/Collapse Button */}
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="absolute right-3 top-3 z-20 rounded-lg bg-black/40 p-1.5 text-white/50 transition hover:bg-black/60 hover:text-white"
            >
              {isExpanded ? <Minimize size={14} /> : <Maximize size={14} />}
            </button>
            {/* Arrow pointing to trigger */}
            <div 
              className={`absolute h-4 w-4 rotate-45 border-white/[0.08] bg-[#061326] ${
                position.vertical === "top" 
                  ? "-bottom-2 border-b border-r" 
                  : "-top-2 border-t border-l"
              } ${
                position.horizontal === "right" 
                  ? "right-6" 
                  : position.horizontal === "left" 
                    ? "left-6" 
                    : "left-1/2 -translate-x-1/2"
              }`} 
            />
            
            <div className="relative z-10">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-[#071a32]">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className={`object-cover ${person.imagePosition || 'object-center'}`}
                />
              </div>

              <div className="mt-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#50BFFF]">
                  {person.role}
                </p>
                <h4 className="mt-1 text-lg font-semibold text-white">
                  {person.name}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-white/50">
                  {person.description || (domainName ? domainDescriptions[domainName] : null) || "Passionate about building communities, exploring technology, and creating meaningful experiences."}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
