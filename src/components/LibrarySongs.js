import React from "react";

function LibrarySongs({ song }) {
  return (
    <div className="song">
      <img alt="sad" src={song.cover} a />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySongs;
