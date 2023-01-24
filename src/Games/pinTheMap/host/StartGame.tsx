import { useStore } from "@nanostores/react";
import { HOST_VIEWS } from "../../../helpers/constants/ptm";
import { updateGameState, game } from "../../../store/ptnStore";
import Heading from "../generic/Heading";
import style from "../style/hostStartGame.module.scss";
const StartGame = ({ gameId }: { gameId: string | undefined }) => {
  const gameObj = useStore(game);

  return (
    <div>
      <Heading text="start game" thinSpacing />
      <p className={style.gameId}>{gameId}</p>
      {gameObj.players && gameObj.players.map((x) => <p>{x}</p>)}

      <div className={style.playerWrapper}>
        {[1, 2, 3, 4, 5, 6].map((x, idx) => {
          return (
            <p className={style.child} key={x}>
              {x}
            </p>
          );
        })}
      </div>
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
