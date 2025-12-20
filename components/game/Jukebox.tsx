
"use client";

import React, { useState } from 'react';
import { X, Play, Pause, Music } from 'lucide-react';
import { Track, Atmosphere } from '@/lib/game-data';

interface JukeboxProps {
    tracks: Track[];
    currentAtmosphere: Atmosphere;
    isOpen: boolean;
    onClose: () => void;
}

export default function Jukebox({ tracks, currentAtmosphere, isOpen, onClose }: JukeboxProps) {
    const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.useRef<HTMLAudioElement | null>(null);

    // Filter tracks based on current atmosphere
    const availableTracks = tracks.filter(t => t.atmosphere.includes(currentAtmosphere));

    const handlePlay = (track: Track) => {
        if (currentTrack?.id === track.id) {
            // Toggle play/pause
            if (isPlaying) {
                audioRef.current?.pause();
                setIsPlaying(false);
            } else {
                audioRef.current?.play();
                setIsPlaying(true);
            }
        } else {
            // New track
            setCurrentTrack(track);
            setIsPlaying(true);
            // Audio element will auto-play due to autoPlay prop when src changes, 
            // but we can enforce it in useEffect if needed.
        }
    };

    React.useEffect(() => {
        if (currentTrack && audioRef.current) {
            audioRef.current.src = currentTrack.url;
            audioRef.current.play();
            setIsPlaying(true);
        }
    }, [currentTrack]);

    if (!isOpen) return null;

    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-950">
                    <div className="flex items-center gap-2 text-[#a8fbd3]">
                        <Music className="w-5 h-5" />
                        <h2 className="font-bold tracking-wider uppercase">Jukebox</h2>
                    </div>
                    <button onClick={onClose} className="text-zinc-400 hover:text-white transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Tracklist */}
                <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2">
                    {availableTracks.length === 0 ? (
                        <p className="text-zinc-500 text-center py-8">No tracks available for this atmosphere.</p>
                    ) : (
                        availableTracks.map((track) => (
                            <div
                                key={track.id}
                                onClick={() => handlePlay(track)}
                                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all border ${currentTrack?.id === track.id
                                        ? 'bg-[#a8fbd3]/10 border-[#a8fbd3]/50'
                                        : 'bg-zinc-800/50 border-transparent hover:bg-zinc-800'
                                    }`}
                            >
                                <div className="flex-1">
                                    <h3 className={`font-bold ${currentTrack?.id === track.id ? 'text-[#a8fbd3]' : 'text-white'}`}>
                                        {track.title}
                                    </h3>
                                    <p className="text-xs text-zinc-400">{track.artist} • {track.genre}</p>
                                </div>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentTrack?.id === track.id ? 'bg-[#a8fbd3] text-black' : 'bg-zinc-700 text-zinc-400'
                                    }`}>
                                    {currentTrack?.id === track.id && isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Now Playing Footer */}
                {currentTrack && (
                    <div className="p-4 bg-zinc-950 border-t border-zinc-800">
                        <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Now Playing</div>
                        <div className="text-[#a8fbd3] font-medium truncate">{currentTrack.title} - {currentTrack.artist}</div>
                        <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
                    </div>
                )}
            </div>
        </div>
    );
}
