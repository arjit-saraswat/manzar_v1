
"use client";

import React from 'react';
import { Hotspot } from '@/lib/game-data';

interface HotspotLayerProps {
    hotspots: Hotspot[];
    onHotspotClick: (hotspot: Hotspot) => void;
    debugMode: boolean;
}

export default function HotspotLayer({ hotspots, onHotspotClick, debugMode }: HotspotLayerProps) {
    return (
        <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
            {hotspots.map((hotspot) => (
                <button
                    key={hotspot.id}
                    onClick={() => onHotspotClick(hotspot)}
                    className={`absolute pointer-events-auto cursor-pointer transition-opacity duration-200 
            ${debugMode ? 'bg-red-500/40 border-2 border-red-500 text-white text-xs font-bold flex items-center justify-center hover:bg-red-500/60' : 'bg-transparent hover:bg-white/10'}`}
                    style={{
                        left: `${hotspot.x}%`,
                        top: `${hotspot.y}%`,
                        width: `${hotspot.width}%`,
                        height: `${hotspot.height}%`,
                    }}
                    aria-label={hotspot.label}
                >
                    {debugMode && hotspot.label}
                </button>
            ))}
        </div>
    );
}
