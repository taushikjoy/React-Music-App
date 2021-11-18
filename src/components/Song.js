import React from "react";

function Song({ currentSong }) {
  return (
    <div className="song-container">
      <img alt="sad" src={currentSong.cover} a />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
}

export default Song;
