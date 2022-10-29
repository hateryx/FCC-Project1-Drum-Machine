import React from "react";

const DrumPad = () => {
  return (
    <button className="drum-pad" id="Heater-1">
      <audio
        id="Q"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        className="clip"
      ></audio>
      Q
    </button>
  );
};

export default DrumPad;
