import { useStore } from "@nanostores/react";
import { sendServer } from "../../../connections/ptm/invoker";
import { game } from "../../../store/ptnStore";

const StartGame = () => {
  const gameObj = useStore(game);

  const startGame = () => {
    if (gameObj.gameId) {
      sendServer(gameObj.gameId, "StartGame");
    }
  };
  return (
    <>
      <pre>{JSON.stringify(gameObj)}</pre>
      <p>start game</p>
      <button onClick={startGame}>Start game</button>
    </>
  );
};

export default StartGame;
