
"use client";

import React, { useRef, useEffect } from 'react';
import { Atmosphere } from '@/lib/game-data';

interface VideoEngineProps {
    source: string;
    isLooping: boolean;
    onEnded?: () => void;
    atmosphere: Atmosphere;
}

export default function VideoEngine({ source, isLooping, onEnded, atmosphere }: VideoEngineProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
        }
    }, [source]);

    // Effect to handle atmosphere changes seamlessly if we were doing advanced blending,
    // but for now, the parent will pass the correct source based on atmosphere.
    // This component just plays what it's given.

    return (
        <div className="absolute inset-0 w-full h-full bg-black overflow-hidden z-0">
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src={source}
                loop={isLooping}
                muted // Muted for autoplay policy, can add unmute button later
                playsInline
                autoPlay
                onEnded={onEnded}
            />
            {/* Overlay to darken video slightly for UI visibility if needed */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>
    );
}
