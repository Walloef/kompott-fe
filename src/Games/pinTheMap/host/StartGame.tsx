import { useStore } from "@nanostores/react";
import { addPlayer, game } from "../../../store/ptnStore";
import Heading from "../generic/Heading";
import style from "../style/hostStartGame.module.scss";
import gsap from "gsap";

const StartGame = ({ gameId }: { gameId: string | undefined }) => {
  const gameObj = useStore(game);
  // const tl = gsap.timeline();

  const animate = (selector: string) => {
    console.log(selector);
    // setTimeout(() => {
    //   tl.to(`[${selector}]`, {
    //     duration: 0,
    //     delay: 0.2,
    //     ease: "bounce.out",
    //     scale: "0",
    //     opacity: "1",
    //   });

    //   tl.to(`[${selector}]`, {
    //     duration: 1.5,
    //     ease: "bounce.out",
    //     scale: "1",
    //   });
    // }, 2);
  };

  return (
    <div>
      <Heading text="start game" thinSpacing />
      {/* <button
        style={{
          position: "relative",
          zIndex: 1,
        }}
        onClick={() => addPlayer("random name")}
      >
        add player
      </button> */}
      <p className={style.gameId}>{gameId}</p>
      <div className={style.playerWrapper}>
        {gameObj.players &&
          gameObj.players.map((player, i) => {
            if (gameObj.players && gameObj.players?.length - 1 === i) {
              animate(`data-animatein="${gameObj.players?.length - 1}"`);
            }

            return (
              <p
                data-animatein={i}
                className={`${style.child} style.child__${i}`}
                key={`${player}-${i}`}
              >
                {player}
              </p>
            );
          })}
        {/* {[
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
        ))} */}
      </div>
    </div>
  );
};

export default StartGame;
