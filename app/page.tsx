"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { User, Youtube, Music2, Coffee } from 'lucide-react';

export default function Home() {
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

        {/* Buy Me a Coffee / Support Link */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <a
            href="https://buymeacoffee.com/manzar1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-full transition-all duration-300 group backdrop-blur-sm"
          >
            <Coffee className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="text-white/80 text-xs md:text-sm font-medium tracking-widest uppercase">Contribute to the next &apos;manzar&apos;</span>
          </a>
        </motion.div>

        {/* Header */}
        <div className="text-center space-y-2 md:space-y-4">
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "0.05em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-[12vw] sm:text-7xl md:text-9xl font-syncopate font-bold uppercase text-white drop-shadow-2xl"
          >
            manzar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.6em]"
          >
            Artist Hub
          </motion.p>
        </div>

        {/* Multimedia Hub */}
        <div className="w-full flex flex-col gap-8 md:gap-12 items-center">

          {/* Spotify Artist Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="w-full max-w-2xl"
          >
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/artist/4z4yO4lgjdyxz4pBD3G59F?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </motion.div>

          {/* Social Links Hub */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            <motion.a
              href="https://www.youtube.com/@manzar-1?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="group flex items-center justify-between p-6 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-2xl transition-all duration-500"
            >
              <div className="flex items-center gap-4">
                <Youtube className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-white font-medium tracking-wider">YouTube</span>
                  <span className="text-white/30 text-[10px] uppercase tracking-widest leading-none mt-1">Subscribe</span>
                </div>
              </div>
              <Youtube className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors" />
            </motion.a>

            <motion.a
              href="https://music.apple.com/in/artist/manzar/1868078180"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="group flex items-center justify-between p-6 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-2xl transition-all duration-500"
            >
              <div className="flex items-center gap-4">
                <Music2 className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-white font-medium tracking-wider">Apple Music</span>
                  <span className="text-white/30 text-[10px] uppercase tracking-widest leading-none mt-1">Find the Artist</span>
                </div>
              </div>
              <Music2 className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors" />
            </motion.a>
          </div>
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

          {/* Contact Emails */}
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
