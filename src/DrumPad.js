import React, { useState } from "react";

const DrumPad = (props) => {
  const [drumbeat, setDrumbeat] = useState("");

  const onKeyPressHandler_beat = (event) => {
    setDrumbeat(event.key);
    //document.getElementById(drumbeat).play();
    //document.getElementById(drumbeat).currentTime = 0;
    console.log(event.target);
    //document.getElementById(pad.song).click();
  };

  window.addEventListener("keypress", onKeyPressHandler_beat);

  const onClickHandler_beat = (event) => {
    //

    setDrumbeat(event.currentTarget.id.charAt(0));
    console.log(event.target);
    document.getElementById(drumbeat).play();
    document.getElementById(drumbeat).currentTime = 0;
  };

  //const onKeyPressHandler = (event) => {};

  return (
    <div id="drum-machine">
      {props.items.map((elem) => (
        <button
          key={elem.key}
          id={`${elem.key}x`}
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
