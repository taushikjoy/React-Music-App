import React from "react";
import LibrarySongs from "./LibrarySongs";

function Library({ songs }) {
  return (
    <div className="library">
      <h1>Library</h1>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySongs song={song} />
        ))}
      </div>
    </div>
  );
}

export default Library;
