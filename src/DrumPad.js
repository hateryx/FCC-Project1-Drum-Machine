import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

const DrumPad = (props) => {
  const [drumbeat, setDrumbeat] = useState("");

  const drumBeatREF = useRef();

  const onKeyPressHandler_beat = (event) => {
    setDrumbeat(event.key);
    //document.getElementById(drumbeat).play();
    //document.getElementById(drumbeat).currentTime = 0;
    console.log(event.target);
    //document.getElementById(pad.song).click();
  };

  window.addEventListener("keypress", onKeyPressHandler_beat);

  const onClickHandler_beat = (event) => {
    const clickedKey = event.target.id;

    console.log(event.currentTarget.id, clickedKey, drumBeatREF);

    //setDrumbeat(event.currentTarget.id.charAt(0));
    //console.log(event.target);
    document.getElementById(clickedKey).play();
    //document.getElementById(clickedKey).currentTime = 0;
  };

  //const onKeyPressHandler = (event) => {};

  return (
    <div id="drum-machine">
      {props.items.map((elem) => (
        <button
          id={elem.song}
          className="drum-pad"
          onClick={onClickHandler_beat}
        >
          <audio id={elem.key} src={elem.url} className="clip"></audio>
          {elem.key}
        </button>
      ))}
    </div>
  );
};
//
export default DrumPad;
