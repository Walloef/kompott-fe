import { useStore } from "@nanostores/react";
import { HOST_VIEWS } from "../../../helpers/constants/ptm";
import { updateGameState, game } from "../../../store/ptnStore";

const StartGame = () => {
  const x = useStore(game);
  console.log(x.players);
  return (
    <div>
      <h1>Pin the map start game!</h1>
      <button
        onClick={() => {
          console.log("löasdkölas");
          updateGameState({
            ...x,
            hostView: HOST_VIEWS.TIMER,
          });
        }}
      >
        Next view
      </button>
    </div>
  );
};

export default StartGame;
