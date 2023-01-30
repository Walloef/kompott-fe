import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { WAITING_VIEWS } from "../../../helpers/constants/ptm";
import { game, updateGameState } from "../../../store/ptnStore";

const Waiting = () => {
  const gameObj = useStore(game);

  const x = () => {
    if (gameObj.waitingView === "players-still-guessing") {
      return <p>Players still guessing</p>;
    }
  };

  useEffect(() => {
    return () => {
      updateGameState({ waitingView: "" });
    };
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(gameObj)}</pre>
      <p>Game/round will start soon</p>
    </div>
  );
};

export default Waiting;
