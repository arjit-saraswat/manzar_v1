"use client";

import React, { useState } from 'react';
import GameContainer from '@/components/game/GameContainer';
import IntroVideo from '@/components/landing/IntroVideo';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <IntroVideo onEnter={() => setShowIntro(false)} />;
  }

  return <GameContainer />;
}


/* 
// LEGACY LANDING PAGE CODE REMOVED
// (Previously preserved here, now removed to clean up the workspace)
*/
