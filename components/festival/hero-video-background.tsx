"use client"

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function HeroVideoBackground() {
    const [videoEnded, setVideoEnded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Attempt to play the video when component mounts
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.log('Auto-play prevented:', error);
                // If autoplay is blocked, show the static image
                setVideoEnded(true);
            });
        }
    }, []);

    const handleVideoEnd = () => {
        setVideoEnded(true);
    };

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            {!videoEnded ? (
                <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                >
                    <source src="/landing-page-graphic/landing-page-video.mov" type="video/quicktime" />
                    <source src="/landing-page-graphic/landing-page-video.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <Image
                    src="/landing-page-graphic/landing-page-image.jpg"
                    alt="Landing Page Background"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
            )}

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30" />
        </div>
    );
}
