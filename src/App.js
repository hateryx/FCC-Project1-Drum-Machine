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

const Q_beat = (event) => {
  Q_audio.currentTime = 0;
  Q_audio.play();
};

const W_beat = (event) => {
  W_audio.play();
  W_audio.currentTime = 0;
};

const E_beat = (event) => {
  E_audio.play();
  E_audio.currentTime = 0;
};

const A_beat = (event) => {
  A_audio.play();
  A_audio.currentTime = 0;
};

const S_beat = (event) => {
  S_audio.play();
  S_audio.currentTime = 0;
};

const D_beat = (event) => {
  D_audio.play();
  D_audio.currentTime = 0;
};

const Z_beat = (event) => {
  Z_audio.play();
  Z_audio.currentTime = 0;
};

const X_beat = (event) => {
  X_audio.play();
  X_audio.currentTime = 0;
};

const C_beat = (event) => {
  C_audio.play();
  C_audio.currentTime = 0;
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
  /*event.key === "q" ? Q_beat() : console.log("wew");

    if (event.key === "w") {
      W_audio.play();
    }*/
};

window.addEventListener("keypress", qwerty);

function App() {
  return (
    <div id="drum-machine">
      <div id="display"></div>
      <div className="drumpad">
        <audio id="Q" src="./Heater-1.mp3" className="clip"></audio>
        <button onClick={Q_beat}>Q</button>
      </div>
      <div className="drumpad">
        <button onClick={W_beat}>W</button>
      </div>
      <div className="drumpad">
        <button onClick={E_beat}>E</button>
      </div>
      <div className="drumpad">
        <button onClick={A_beat}>A</button>
      </div>
      <div className="drumpad">
        <button onClick={S_beat}>S</button>
      </div>
      <div className="drumpad">
        <button onClick={D_beat}>D</button>
      </div>
      <div className="drumpad">
        <button onClick={Z_beat}>Z</button>
      </div>
      <div className="drumpad">
        <button>X</button>
      </div>
      <div className="drumpad">
        <button>C</button>
      </div>
    </div>
  );
}

export default App;
