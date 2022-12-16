import { useStore } from "@nanostores/react";
import { HOST_VIEWS } from "../../../helpers/constants/ptm";
import { updateGameState, game } from "../../../store/ptnStore";

const StartGame = ({ gameId }: { gameId: string | undefined }) => {
  const gameObj = useStore(game);

  return (
    <div>
      <h1>Pin the map start game!</h1>
      <p>{gameId}</p>
      {gameObj.players && gameObj.players.map((x) => <p>{x}</p>)}
      <button
        onClick={() => {
          updateGameState({
            ...gameObj,
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
