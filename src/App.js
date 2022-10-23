import React, { useState } from "react";
import "./App.css";

import Heater_1 from "./audio/Heater-1.mp3";
import Heater_2 from "./audio/Heater-2.mp3";
import Heater_3 from "./audio/Heater-3.mp3";
import Heater_4 from "./audio/Heater-4.mp3";
import Clap from "./audio/Clap.mp3";
import Open_HH from "./audio/Open_HH.mp3";
import Kick_n_Hat from "./audio/Kick_n_Hat.mp3";
import Kick from "./audio/Kick.mp3";
import Closed_HH from "./audio/Closed_HH.mp3";

const Q_audio = new Audio(Heater_1);
const W_audio = new Audio(Heater_2);
const E_audio = new Audio(Heater_3);
const A_audio = new Audio(Heater_4);
const S_audio = new Audio(Clap);
const D_audio = new Audio(Open_HH);
const Z_audio = new Audio(Kick_n_Hat);
const X_audio = new Audio(Kick);
const C_audio = new Audio(Closed_HH);
var drum_spec;

function App() {
  const [drum_specState, setDrum_specState] = useState(drum_spec);

  const Q_beat = (event) => {
    return () => {
      document.getElementById("Q").play();
      setDrum_specState("Heater_1");
    };

    //Q_audio.currentTime = 0;
    //let audey = document.getElementById("Q");
    //audey.play();
    //Q_audio.play();
  };

  const W_beat = (event) => {
    W_audio.play();
    W_audio.currentTime = 0;
    setDrum_specState("Heater_2");
  };

  const E_beat = (event) => {
    E_audio.play();
    E_audio.currentTime = 0;
    setDrum_specState("Heater_3");
  };

  const A_beat = (event) => {
    A_audio.play();
    A_audio.currentTime = 0;
    setDrum_specState("Heater_4");
  };

  const S_beat = (event) => {
    S_audio.play();
    S_audio.currentTime = 0;
    setDrum_specState("Clap");
  };

  const D_beat = (event) => {
    D_audio.play();
    D_audio.currentTime = 0;
    setDrum_specState("Open High Hat");
  };

  const Z_beat = (event) => {
    Z_audio.play();
    Z_audio.currentTime = 0;
    setDrum_specState("Kick n' Hat");
  };

  const X_beat = (event) => {
    X_audio.play();
    X_audio.currentTime = 0;
    setDrum_specState("Kick!");
  };

  const C_beat = (event) => {
    C_audio.play();
    C_audio.currentTime = 0;
    setDrum_specState("Closed High Hat");
  };

  const qwerty = (event) => {
    switch (event.key) {
      case "q":
        Q_beat();
        break;
      case "w":
        W_beat();
        break;
      case "e":
        E_beat();
        break;

      case "a":
        A_beat();
        break;
      case "s":
        S_beat();
        break;
      case "d":
        D_beat();
        break;

      case "z":
        D_beat();
        break;

      case "x":
        X_beat();
        break;

      case "c":
        C_beat();
        break;
      default:
    }
  };

  window.addEventListener("keypress", qwerty);

  return (
    <div className="Table1">
      <div id="drum-machine">
        <button className="drum-pad" id="Heater-1" onClick={Q_beat}>
          Q{" "}
          <audio
            id="Q"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            className="clip"
          ></audio>
        </button>
        <button className="drum-pad" id="Heater-2" onClick={W_beat}>
          W <audio id="W" src="./Heater-1.mp3" className="clip"></audio>
        </button>

        <button className="drum-pad" id="Heater-3" onClick={E_beat}>
          E <audio id="E" src="./Heater-1.mp3" className="clip"></audio>
        </button>

        <button className="drum-pad" id="Heater-4" onClick={A_beat}>
          A <audio id="A" src="./Heater-1.mp3" className="clip"></audio>
        </button>

        <button className="drum-pad" id="Clap" onClick={S_beat}>
          S <audio id="S" src="./Heater-1.mp3" className="clip"></audio>
        </button>

        <button className="drum-pad" id="Open-HH" onClick={D_beat}>
          D <audio id="D" src="./Heater-1.mp3" className="clip"></audio>
        </button>

        <button className="drum-pad" id="Kick-n-Hat" onClick={Z_beat}>
          Z <audio id="Z" src="./Heater-1.mp3" className="clip"></audio>
        </button>

        <button className="drum-pad" id="Kick" onClick={X_beat}>
          X <audio id="X" src="./Heater-1.mp3" className="clip"></audio>
        </button>

        <button className="drum-pad" id="Close-HH" onClick={C_beat}>
          C <audio id="C" src="./Heater-1.mp3" className="clip"></audio>
        </button>
      </div>

      <div id="display">{String(drum_specState)}</div>
    </div>
  );
}

export default App;
