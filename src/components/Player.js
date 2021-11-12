import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function Player() {
  return (
    <div className="player-container">
      <div className="time-control">
        <p>start</p>
        <input type="range" />
        <p>end</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="angle-left" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon className="play" size="2x" icon={faPlay} />
        <FontAwesomeIcon
          className="angle-right"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
}

export default Player;
