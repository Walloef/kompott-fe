import { useState } from "react";
import { connectPlayer } from "../../../connections/ptm/playerSocket";
import Heading from "../generic/Heading";
import formStyle from "../style/form.module.scss";

const Connect = () => {
  const [playerName, setPlayerName] = useState("");
  const [gameId, setGameId] = useState("");

  const onsubmit = () => {
    connectPlayer(playerName, gameId);
  };

  return (
    <div className="wrapper">
      <Heading text="pin the map" />
      <div className={formStyle.wrapper}>
        <input
          placeholder="name"
          type="text"
          maxLength={11}
          className={formStyle.input}
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <input
          placeholder="game id"
          inputMode="numeric"
          pattern="[0-9]*"
          minLength={5}
          maxLength={5}
          type="text"
          className={formStyle.input}
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
        />
        <button className={formStyle.button} type="button" onClick={onsubmit}>
          Join game
        </button>
      </div>
    </div>
  );
};

export default Connect;
