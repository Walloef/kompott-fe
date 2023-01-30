import { useStore } from "@nanostores/react";
import { sendServer } from "../../../connections/ptm/invoker";
import { game } from "../../../store/ptnStore";
import Button from "../generic/Button";
import CenterWrapper from "../generic/CenterWrapper";
import Heading from "../generic/Heading";
import textStyle from "../style/text.module.scss";

const StartGame = () => {
  const gameObj = useStore(game);

  const start = () => {
    if (gameObj.gameId) {
      sendServer(gameObj.gameId, "StartGame");
    }
  };

  return (
    <CenterWrapper>
      <Heading text="pin the map" />
      <pre>{JSON.stringify(gameObj)}</pre>
      <p className={textStyle.discrete}>
        You are the captain if this ship, it's up to you to start the game,
      </p>
      <p className={textStyle.discrete__decorated}>
        <i>Make sure everyone is in!</i>
      </p>
      <Button text="Start game" onClick={start} />
    </CenterWrapper>
  );
};

export default StartGame;
