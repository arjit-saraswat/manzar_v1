"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, User } from 'lucide-react';

export default function Home() {
  // Placeholder YouTube ID - User should replace this with the actual video ID
  const youtubeId = "pWf88pdZnyo";

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden font-space-grotesk">
      {/* Background Image with Overlay */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
        style={{
          backgroundImage: "url('/background.png')",
          filter: "brightness(0.4) contrast(1.1)"
        }}
      />

      {/* Cinematic Overlays */}
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />
      <div className="fixed inset-0 z-0 backdrop-blur-[2px] pointer-events-none" />

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl px-6 py-12 flex flex-col items-center gap-12"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-syncopate font-bold uppercase text-white drop-shadow-2xl"
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

        {/* YouTube Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 backdrop-blur-md relative group"
        >
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=1&rel=0&modestbranding=1`}
            title="manzar - in my heart"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {/* Subtle overlay to prevent interaction before hover if desired, but iframe needs controls */}
        </motion.div>

        {/* Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl mt-4">
          {/* Music Links */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 font-bold mb-6">Listen</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://open.spotify.com/track/7rZejUtn8r10hNoEMsahL2?si=26298b977bcc4fa6"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/50 rounded-xl transition-all duration-300"
              >
                <span className="font-medium tracking-wide">Spotify</span>
                <ExternalLink className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
              <a
                href="https://music.apple.com/us/song/in-my-heart/1869065958"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-white/5 hover:bg-rose-500/20 border border-white/10 hover:border-rose-500/50 rounded-xl transition-all duration-300"
              >
                <span className="font-medium tracking-wide">Apple Music</span>
                <ExternalLink className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            </div>
          </div>

          {/* Contact & Credits */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 font-bold mb-6">Connect</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:ahoy@manzar.one"
                className="group flex items-center gap-4 p-4 bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/50 rounded-xl transition-all duration-300"
              >
                <Mail className="w-4 h-4 opacity-40 group-hover:opacity-100" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium tracking-wide">Collaborations</span>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest">ahoy@manzar.one</span>
                </div>
              </a>
              <a
                href="mailto:arjit@manzar.one"
                className="group flex items-center gap-4 p-4 bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 rounded-xl transition-all duration-300"
              >
                <Mail className="w-4 h-4 opacity-40 group-hover:opacity-100" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium tracking-wide">Artist Connect</span>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest">arjit@manzar.one</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="pt-12 flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-2 text-white/60 text-sm tracking-widest uppercase">
            <User className="w-3 h-3" />
            <span>Man behind the Machine</span>
          </div>
          <div className="text-white font-syncopate font-bold text-lg tracking-widest uppercase">
            Arjit Saraswat
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 opacity-30" />
    </main>
  );
}
