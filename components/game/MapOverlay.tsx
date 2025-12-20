
"use client";

import React from 'react';
import { X, MapPin } from 'lucide-react';
import { Scene } from '@/lib/game-data';

interface MapOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    scenes: Record<string, Scene>;
    onTravel: (sceneId: string) => void;
    currentSceneId: string;
}

export default function MapOverlay({ isOpen, onClose, scenes, onTravel, currentSceneId }: MapOverlayProps) {
    if (!isOpen) return null;

    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-3xl aspect-video bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl overflow-hidden flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-950 z-10">
                    <h2 className="text-xl font-bold tracking-wider uppercase text-white">World Map</h2>
                    <button onClick={onClose} className="text-zinc-400 hover:text-white transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Map Content (Placeholder for visual map) */}
                <div className="relative flex-1 bg-[#1a1b26] p-8">
                    <div className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                            backgroundSize: '20px 20px'
                        }}
                    />

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
                        {Object.values(scenes).map((scene) => (
                            <button
                                key={scene.id}
                                onClick={() => {
                                    if (scene.id !== currentSceneId) {
                                        onTravel(scene.id);
                                        onClose();
                                    }
                                }}
                                disabled={scene.id === currentSceneId}
                                className={`p-6 rounded-lg border flex flex-col items-center gap-3 transition-all group
                            ${scene.id === currentSceneId
                                        ? 'bg-[#4fb7b3]/20 border-[#4fb7b3] cursor-default'
                                        : 'bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700 hover:border-white/50'
                                    }`}
                            >
                                <MapPin className={`w-8 h-8 ${scene.id === currentSceneId ? 'text-[#4fb7b3]' : 'text-zinc-400 group-hover:text-white'}`} />
                                <span className={`font-bold uppercase tracking-widest ${scene.id === currentSceneId ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
                                    {scene.name}
                                </span>
                                {scene.id === currentSceneId && (
                                    <span className="text-[10px] uppercase tracking-widest text-[#4fb7b3] bg-[#4fb7b3]/10 px-2 py-1 rounded-full">
                                        Current Location
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
