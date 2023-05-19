import React, { useState } from 'react';

export default function GameBoard() {
    
  const [zoomedTile, setZoomedTile] = useState(null);

  // Create an array of 36 question tiles
  const tiles = Array.from(Array(30).keys());

  // Handle tile click events
  const handleClick = (tile) => {
    if (zoomedTile === tile) {
      setZoomedTile(null);
      console.log(`Tile ${tile + 1} closed`);
    } else {
      setZoomedTile(tile);
      console.log(`Tile ${tile + 1} opened`);
    }
  };

  return (
    <>
      {/* categories */}
      <div className="grid grid-cols-6 px-4">
        <div className="col-span-1 category-card">Category 1</div>
        <div className="col-span-1 category-card">Category 2</div>
        <div className="col-span-1 category-card">Category 3</div>
        <div className="col-span-1 category-card">Category 4</div>
        <div className="col-span-1 category-card">Category 5</div>
        <div className="col-span-1 category-card">Category 6</div>
      </div>

      {/* questions */}
      <div className="grid grid-cols-6 px-4">
        {tiles.map((tile) => (
          <div
            key={tile}
            id={`tile-${tile}`}
            className={`card ${zoomedTile === tile ? 'zoomed' : ''}`}
            onClick={() => handleClick(tile)}
          >
            Tile {tile + 1}
          </div>
        ))}
      </div>
    </>
  );
}