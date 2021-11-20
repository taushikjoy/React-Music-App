import React from "react";
import LibrarySongs from "./LibrarySongs";

function Library({ songs, setCurrentSong }) {
  return (
    <div className="library">
      <h1>Library</h1>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySongs setCurrentSong={setCurrentSong} song={song} />
        ))}
      </div>
    </div>
  );
}

export default Library;
