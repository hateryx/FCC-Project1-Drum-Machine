import React, { useState } from "react";

const DrumPad = (props) => {
  const [drumbeat, setDrumbeat] = useState("");
  const onClickHandler_beat = (event) => {
    //

    setDrumbeat(`${event.currentTarget.id}x`);
    console.log(drumbeat);
    document.getElementById(drumbeat).play();
  };

  //const onKeyPressHandler = (event) => {};

  return (
    <div id="drum-machine">
      {props.items.map((elem) => (
        <button
          key={elem.key}
          className="drum-pad"
          id={elem.key}
          onClick={onClickHandler_beat}
        >
          <audio id={`${elem.key}x`} src={elem.url} className="clip"></audio>
          {elem.key}
        </button>
      ))}
    </div>
  );
};

export default DrumPad;
