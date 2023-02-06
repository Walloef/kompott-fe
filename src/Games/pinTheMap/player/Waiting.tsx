import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { WAITING_VIEWS } from "../../../helpers/constants/ptm";
import { game, updateGameState } from "../../../store/ptnStore";
import Heading from "../generic/Heading";

const Waiting = () => {
  const gameObj = useStore(game);

  // useEffect(() => {
  //   return () => {
  //     updateGameState({ waitingView: "" });
  //   };
  // }, []);

  return (
    <div>
      <pre>{JSON.stringify(gameObj)}</pre>
      <Heading text="Game/round will start soon" />
    </div>
  );
};

export default Waiting;
