import React, { useRef, useEffect } from 'react';
import Image from 'next/image'
import Logo from '../../public/jewpardy_logo.jpg'

const OpeningScreen = ({ handleKeyPress }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current.loop = true;
        audioRef.current.play();
    
        return () => {
          audioRef.current.pause();
        };
      }, []);

  return (
    <div>
        {/* <Image src={Logo} alt="Jewpardy Logo" width={896} height={465} /> */}
      <h1>Welcome to the Game</h1>
      <p>Press spacebar to start</p>
      <audio ref={audioRef}>
        <source src="/public/jeopardy-theme.mp3" type="audio/mpeg" />
      </audio>
      <div onKeyDown={handleKeyPress} tabIndex="0" />
    </div>
  );
};

export default OpeningScreen;
