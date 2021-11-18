import React from "react";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

function Player({ currentSong, isPlaying, setIsPlaying }) {
  const audioref = useRef(null);

  // let test = faPlay;
  // let classtest = "play";

  const playHandler = () => {
    if (isPlaying) {
      audioref.current.pause();
      setIsPlaying(!isPlaying);
      // test = faPause;
      // classtest = "pause";
    } else {
      audioref.current.play();
      setIsPlaying(!isPlaying);
      // test = faPause;
      // classtest = "pause";
    }
  };
  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({ ...songInfo, currentTime, duration });
  };

  const getTime = (value) => {
    return (
      Math.floor(value / 60) + ":" + Math.floor(value % 60 ? value % 60 : "00")
    );
  };

  const dragHandler = (e) => {
    audioref.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const [songInfo, setSongInfo] = useState({
    duration: null,
    currentTime: null,
  });

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="angle-left" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playHandler}
          className="paly"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="angle-right"
          size="2x"
          icon={faAngleRight}
        />
      </div>

      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioref}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default Player;
