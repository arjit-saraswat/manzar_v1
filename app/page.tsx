"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Mail, User, ChevronLeft, ChevronRight } from 'lucide-react';

const RELEASES = [
  {
    id: "in-my-heart",
    title: "in my heart",
    type: "Single",
    youtubeId: "10JZ3qm14ec",
    spotifyUrl: "https://open.spotify.com/embed/track/7rZejUtn8r10hNoEMsahL2?utm_source=generator",
    appleMusicUrl: "https://embed.music.apple.com/us/album/in-my-heart-single/1869065800?theme=dark"
  },
  {
    id: "tsunami-in-texas",
    title: "Tsunami in Texas",
    type: "Album",
    youtubeId: "4hvILeunKXA",
    spotifyUrl: "https://open.spotify.com/embed/album/1nNL2A7DYtQ85QG3xP4dRo?utm_source=generator",
    appleMusicUrl: "https://embed.music.apple.com/in/album/tsunami-in-texas/1871992738?theme=dark"
  }
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex((prevIndex) => (prevIndex + newDirection + RELEASES.length) % RELEASES.length);
  };

  const activeRelease = RELEASES[activeIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-x-hidden font-space-grotesk scroll-smooth">
      {/* Background Image with Overlay */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
        style={{
          backgroundImage: "url('/background.png')",
          filter: "brightness(0.3) contrast(1.1)"
        }}
      />

      {/* Cinematic Overlays */}
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />
      <div className="fixed inset-0 z-0 backdrop-blur-[1px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl px-4 md:px-6 py-6 md:py-16 flex flex-col items-center gap-8 md:gap-12">
        {/* Header */}
        <div className="text-center space-y-2 md:space-y-4">
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "0.05em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-[10vw] sm:text-6xl md:text-8xl font-syncopate font-bold uppercase text-white drop-shadow-2xl"
          >
            manzar
          </motion.h1>

          <div className="flex items-center justify-center gap-2 md:gap-4">
            <button
              onClick={() => paginate(-1)}
              className="p-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all active:scale-90"
              aria-label="Previous release"
            >
              <ChevronLeft className="w-5 h-5 text-white/60" />
            </button>

            <div className="flex flex-col items-center min-w-[160px] md:min-w-[200px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.p
                  key={activeRelease.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="text-lg md:text-2xl font-light italic text-emerald-100 tracking-wider text-center"
                >
                  {activeRelease.title}
                </motion.p>
              </AnimatePresence>
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-white/30 mt-0.5">{activeRelease.type}</span>
            </div>

            <button
              onClick={() => paginate(1)}
              className="p-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all active:scale-90"
              aria-label="Next release"
            >
              <ChevronRight className="w-5 h-5 text-white/60" />
            </button>
          </div>
        </div>

        {/* Multimedia Section - Swipable */}
        <div className="w-full relative min-h-[900px] sm:min-h-[800px] md:min-h-[700px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeRelease.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) > 50;
                if (swipe) {
                  paginate(offset.x > 0 ? -1 : 1);
                }
              }}
              className="absolute inset-0 w-full flex flex-col gap-8 md:gap-12 cursor-grab active:cursor-grabbing"
            >
              {/* YouTube Video Section */}
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 backdrop-blur-md relative">
                <iframe
                  className="w-full h-full pointer-events-auto"
                  src={`https://www.youtube.com/embed/${activeRelease.youtubeId}?autoplay=0&mute=0&loop=1&playlist=${activeRelease.youtubeId}&controls=1&rel=0&modestbranding=1`}
                  title={`manzar - ${activeRelease.title}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              {/* Audio Embeds */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start pointer-events-auto">
                {/* Spotify Embed */}
                <div className="w-full">
                  <iframe
                    style={{ borderRadius: "12px" }}
                    src={activeRelease.spotifyUrl}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>

                {/* Apple Music Embed */}
                <div className="w-full">
                  <iframe
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                    frameBorder="0"
                    height="450"
                    style={{ width: "100%", maxWidth: "100%", overflow: "hidden", borderRadius: "10px", background: "transparent" }}
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src={activeRelease.appleMusicUrl}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer & Contact */}
        <div className="w-full flex flex-col items-center gap-8 md:gap-12 mt-8">
          {/* Man behind the Machine Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="flex items-center gap-2 text-white/60 text-xs md:text-sm tracking-widest uppercase">
              <User className="w-3 h-3" />
              <span>Man behind the Machine</span>
            </div>
            <div className="text-white font-syncopate font-bold text-base md:text-lg tracking-widest uppercase text-center">
              Arjit Saraswat
            </div>
          </motion.div>

          {/* Contact Emails - Moved to the very bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl border-t border-white/10 pt-8 md:pt-12 mb-12"
          >
            <a
              href="mailto:ahoy@manzar.one"
              className="group flex flex-col items-center p-4 md:p-6 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-xl md:rounded-2xl transition-all duration-500"
            >
              <span className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-2 group-hover:text-white/60 transition-colors text-center">Collaborations</span>
              <span className="text-sm md:text-base text-white font-medium tracking-wider group-hover:scale-105 transition-transform text-center break-all">ahoy@manzar.one</span>
            </a>
            <a
              href="mailto:arjit@manzar.one"
              className="group flex flex-col items-center p-4 md:p-6 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-xl md:rounded-2xl transition-all duration-500"
            >
              <span className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-2 group-hover:text-white/60 transition-colors text-center">Connect with the Artist</span>
              <span className="text-sm md:text-base text-white font-medium tracking-wider group-hover:scale-105 transition-transform text-center break-all">arjit@manzar.one</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 opacity-20" />
    </main>
  );
}
