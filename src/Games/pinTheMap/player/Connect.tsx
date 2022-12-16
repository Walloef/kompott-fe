import { useState } from "react";
import { connectPlayer } from "../../../connections/ptm/playerSocket";

const Connect = () => {
  const [playerName, setPlayerName] = useState("");
  const [gameId, setGameId] = useState("");
  const onsubmit = () => {
    console.table({ playerName, gameId });
    connectPlayer(playerName, gameId);
  };
  return (
    <>
      <p>
        hej
        {gameId}
        {playerName}
      </p>
      <input
        placeholder="name"
        type="text"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <input
        placeholder="game id"
        type="text"
        value={gameId}
        onChange={(e) => setGameId(e.target.value)}
      />
      <button type="button" onClick={onsubmit}>
        Join game
      </button>
    </>
  );
};

export default Connect;