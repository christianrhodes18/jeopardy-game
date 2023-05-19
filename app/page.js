'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OpeningScreen from './components/OpeningScreen';
import GameBoard from './components/GameBoard';

const Home = () => {
  const router = useRouter();

  const handleKeyPress = (e) => {
    if (e.code === 'Space') {
      console.log('Spacebar pressed')
      router.push('/game');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div>
      <OpeningScreen handleKeyPress={handleKeyPress} />
      {/* <GameBoard /> */}
    </div>
  );
};

export default Home;
