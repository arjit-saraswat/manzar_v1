"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const videoThumbnails = [
    '/videos/BaeRagi - Thumbnail v13_00086634 (1).png',
    '/videos/BaeRagi - Thumbnail v7_00087112 (1).png',
    '/videos/BaeRagi - Thumbnail v8_00088273 (1).png',
    '/videos/frame 4_00092859.jpg',
    '/videos/frame 5_00092447.jpg',
    '/videos/frame 6_00093219.jpg',
    '/videos/scene_000.jpg',
    '/videos/scene_001.jpg',
    '/videos/scene_008.jpg',
    '/videos/Whisk_ea9c51a0a3b1acd81af458fcad9aee45dr.jpeg',
];

export default function FilmStrip() {
    return (
        <div className="absolute bottom-12 md:bottom-16 left-0 w-full py-2 md:py-3 bg-black z-20 overflow-hidden border-y-4 border-black shadow-[0_0_40px_rgba(0,0,0,0.4)]">
            {/* Film strip perforations on top */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-black flex gap-2 px-2">
                {[...Array(50)].map((_, i) => (
                    <div key={`top-${i}`} className="w-3 h-full bg-white/20 shrink-0" />
                ))}
            </div>

            {/* Film strip perforations on bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-black flex gap-2 px-2">
                {[...Array(50)].map((_, i) => (
                    <div key={`bottom-${i}`} className="w-3 h-full bg-white/20 shrink-0" />
                ))}
            </div>

            {/* Scrolling film frames */}
            <motion.div
                className="flex w-fit will-change-transform py-2"
                animate={{ x: "-50%" }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                {/* Duplicate content for seamless loop */}
                {[0, 1].map((key) => (
                    <div key={key} className="flex shrink-0 gap-4 px-2">
                        {videoThumbnails.map((thumbnail, i) => (
                            <div
                                key={`${key}-${i}`}
                                className="relative shrink-0 bg-black border-2 border-white/30"
                                style={{ width: '200px', height: '112px' }}
                            >
                                <Image
                                    src={thumbnail}
                                    alt={`Video ${i + 1}`}
                                    fill
                                    className="object-cover grayscale"
                                    unoptimized
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
