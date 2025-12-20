"use client";

import React, { useRef, useEffect } from 'react';

interface IntroVideoProps {
    onEnter: () => void;
}

export default function IntroVideo({ onEnter }: IntroVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.log('Intro video autoplay prevented:', error);
            });
        }
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full z-50 bg-black flex items-center justify-center overflow-hidden">
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                autoPlay
                muted
                loop
                playsInline
            >
                {/* Using external Google Drive link to avoid GitHub file size limits and speed up initial load */}
                <source src="https://drive.google.com/uc?id=1OVusryx8jSMjreEeFNvJBebqPDqNmX0Y&export=download" type="video/mp4" />
                {/* Fallback to local optimized video if external fails */}
                <source src="/landing-page-graphic/landing-page-video.mov" type="video/quicktime" />
                Your browser does not support the video tag.
            </video>

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/20">
                <button
                    onClick={onEnter}
                    className="px-12 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md rounded-full font-bold uppercase tracking-[0.3em] transition-all hover:scale-105 active:scale-95 duration-300 group"
                >
                    <span className="relative z-10">Enter Studio</span>
                    <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full -z-10" />
                </button>
            </div>

            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </div>
    );
}
