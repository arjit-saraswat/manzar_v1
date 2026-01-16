"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, User } from 'lucide-react';

export default function Home() {
  const youtubeId = "10JZ3qm14ec";

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden font-space-grotesk scroll-smooth">
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl px-6 py-16 flex flex-col items-center gap-16"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "0.05em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-[11vw] sm:text-6xl md:text-8xl font-syncopate font-bold uppercase text-white drop-shadow-2xl"
          >
            manzar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl font-light italic text-emerald-100 tracking-wider"
          >
            in my heart
          </motion.p>
        </div>

        {/* Multimedia Section */}
        <div className="w-full space-y-12">
          {/* YouTube Video Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 backdrop-blur-md relative"
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=1&rel=0&modestbranding=1&si=USyw3hURTVEYITFU`}
              title="manzar - in my heart"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </motion.div>

          {/* Audio Embeds */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Spotify Embed */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="w-full"
            >
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/7rZejUtn8r10hNoEMsahL2?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </motion.div>

            {/* Apple Music Embed */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="w-full"
            >
              <iframe
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                frameBorder="0"
                height="352"
                style={{ width: "100%", maxWidth: "660px", overflow: "hidden", borderRadius: "10px" }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src="https://embed.music.apple.com/us/album/in-my-heart-single/1869065800?theme=dark"
              />
            </motion.div>
          </div>
        </div>

        {/* Footer & Contact */}
        <div className="w-full flex flex-col items-center gap-12 mt-8">
          {/* Man behind the Machine Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="flex items-center gap-2 text-white/60 text-sm tracking-widest uppercase">
              <User className="w-3 h-3" />
              <span>Man behind the Machine</span>
            </div>
            <div className="text-white font-syncopate font-bold text-lg tracking-widest uppercase">
              Arjit Saraswat
            </div>
          </motion.div>

          {/* Contact Emails - Moved to the very bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl border-t border-white/10 pt-12"
          >
            <a
              href="mailto:ahoy@manzar.one"
              className="group flex flex-col items-center p-6 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-2xl transition-all duration-500"
            >
              <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] mb-2 group-hover:text-white/60 transition-colors">Collaborations</span>
              <span className="text-white font-medium tracking-wider group-hover:scale-110 transition-transform">ahoy@manzar.one</span>
            </a>
            <a
              href="mailto:arjit@manzar.one"
              className="group flex flex-col items-center p-6 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-2xl transition-all duration-500"
            >
              <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] mb-2 group-hover:text-white/60 transition-colors">Connect with the Artist</span>
              <span className="text-white font-medium tracking-wider group-hover:scale-110 transition-transform">arjit@manzar.one</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 opacity-20" />
    </main>
  );
}

