import { useStore } from "@nanostores/react";
import { game } from "../../../store/ptnStore";
import Heading from "../generic/Heading";
import style from "../style/hostStartGame.module.scss";
const StartGame = ({ gameId }: { gameId: string | undefined }) => {
  const gameObj = useStore(game);

  return (
    <div>
      <Heading text="start game" thinSpacing />
      <p className={style.gameId}>{gameId}</p>
      <div className={style.playerWrapper}>
        {gameObj.players &&
          gameObj.players.map((player, i) => (
            <p
              className={`${style.child} style.child__${i}`}
              key={`${player}-${i}`}
            >
              {player}
            </p>
          ))}
        {[
          "Kristofer",
          "NinjaGrisen",
          "Kristofer",
          "NinjaGrisen",
          "KRISTOFER",
          "NINJAGRISEN",
        ].map((player, i) => (
          <p
            className={`${style.child} style.child__${i}`}
            key={`${player}-${i}`}
          >
            {player}
          </p>
        ))}
      </div>
    </div>
  );
};

export default StartGame;
