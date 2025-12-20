
"use client";

import React, { useState, useEffect } from 'react';
import {
    GAME_DATA,
    MUSIC_TRACKS,
    ATMOSPHERES,
    INITIAL_SCENE_ID,
    Scene,
    Hotspot,
    Atmosphere
} from '@/lib/game-data';
import VideoEngine from './VideoEngine';
import HotspotLayer from './HotspotLayer';
import Jukebox from './Jukebox';
import MapOverlay from './MapOverlay';
import FilmStrip from '@/components/festival/film-strip';
import { Map, Music, Settings, Eye } from 'lucide-react';

export default function GameContainer() {
    // Game State
    const [currentSceneId, setCurrentSceneId] = useState<string>(INITIAL_SCENE_ID);
    const [atmosphere, setAtmosphere] = useState<Atmosphere>('default');
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [transitionVideoSrc, setTransitionVideoSrc] = useState<string | null>(null);
    const [nextSceneId, setNextSceneId] = useState<string | null>(null);

    // UI State
    const [isJukeboxOpen, setIsJukeboxOpen] = useState(false);
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [debugMode, setDebugMode] = useState(false);

    const currentScene = GAME_DATA[currentSceneId];

    // Handle Hotspot Click
    const handleHotspotClick = (hotspot: Hotspot) => {
        if (isTransitioning) return;

        if (hotspot.action === 'transition' && hotspot.targetSceneId && hotspot.transitionVideo) {
            // Start Transition
            setIsTransitioning(true);
            setTransitionVideoSrc(hotspot.transitionVideo);
            setNextSceneId(hotspot.targetSceneId);
        } else if (hotspot.action === 'jukebox') {
            setIsJukeboxOpen(true);
        }
    };

    // Handle Video End (for transitions)
    const handleVideoEnded = () => {
        if (isTransitioning && nextSceneId) {
            setCurrentSceneId(nextSceneId);
            setIsTransitioning(false);
            setTransitionVideoSrc(null);
            setNextSceneId(null);
        }
    };

    // Handle Map Travel
    const handleMapTravel = (targetSceneId: string) => {
        // For now, instant teleport. Could add a generic travel transition later.
        setCurrentSceneId(targetSceneId);
        setIsMapOpen(false);
    };

    // Cycle Atmosphere
    const cycleAtmosphere = () => {
        const currentIndex = ATMOSPHERES.indexOf(atmosphere);
        const nextIndex = (currentIndex + 1) % ATMOSPHERES.length;
        setAtmosphere(ATMOSPHERES[nextIndex]);
    };

    // Determine current video source
    const videoSource = isTransitioning && transitionVideoSrc
        ? transitionVideoSrc
        : currentScene.videoLoop[atmosphere];

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden font-sans text-white select-none">

            {/* Video Layer */}
            <VideoEngine
                source={videoSource}
                isLooping={!isTransitioning}
                onEnded={handleVideoEnded}
                atmosphere={atmosphere}
            />

            {/* Interactive Layer (only active when not transitioning) */}
            {!isTransitioning && (
                <HotspotLayer
                    hotspots={currentScene.hotspots}
                    onHotspotClick={handleHotspotClick}
                    debugMode={debugMode}
                />
            )}

            {/* HUD / UI Overlay */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start pointer-events-none z-20">

                {/* Left: Location Info */}
                <div className="pointer-events-auto">
                    <h1 className="text-4xl font-bold uppercase tracking-tighter drop-shadow-lg">{currentScene.name}</h1>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded backdrop-blur-md border border-white/10 uppercase tracking-widest">
                            Atmosphere: <span className="text-[#a8fbd3]">{atmosphere}</span>
                        </span>
                    </div>
                </div>

                {/* Right: Controls */}
                <div className="flex flex-col gap-4 pointer-events-auto">
                    <button
                        onClick={() => setIsMapOpen(true)}
                        className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                        title="Open Map"
                    >
                        <Map className="w-6 h-6" />
                    </button>

                    <button
                        onClick={cycleAtmosphere}
                        className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                        title="Change Atmosphere"
                    >
                        <Settings className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
                    </button>

                    <button
                        onClick={() => setDebugMode(!debugMode)}
                        className={`w-12 h-12 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center transition-all ${debugMode ? 'bg-red-500 text-white' : 'bg-black/40 hover:bg-white hover:text-black'}`}
                        title="Toggle Debug Mode"
                    >
                        <Eye className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Overlays */}
            <Jukebox
                isOpen={isJukeboxOpen}
                onClose={() => setIsJukeboxOpen(false)}
                tracks={MUSIC_TRACKS}
                currentAtmosphere={atmosphere}
            />

            <MapOverlay
                isOpen={isMapOpen}
                onClose={() => setIsMapOpen(false)}
                scenes={GAME_DATA}
                onTravel={handleMapTravel}
                currentSceneId={currentSceneId}
            />

            {/* Film Strip */}
            <FilmStrip />

        </div>
    );
}
