import FinalScore from "./FinalScore";
import Guessing from "./Guessing";
import Score from "./Score";
import StartGame from "./StartGame";
import Timer from "./Timer";
import { useStore } from "@nanostores/react";
import { game } from "../../../store/ptnStore";
import { HOST_VIEWS } from "../../../helpers/constants/ptm";
import { useEffect } from "react";
import { connectHost } from "../../../connections/ptm/hostSocket";

const Index = () => {
  useEffect(() => {
    connectHost();
  }, []);

  const gameObj = useStore(game);

  return (
    <>
      <p>{gameObj.hostView}</p>
      {gameObj.hostView === HOST_VIEWS.FINAL_SCORE ? <FinalScore /> : null}

      {gameObj.hostView === HOST_VIEWS.GUESSING ? <Guessing /> : null}
      {gameObj.hostView === HOST_VIEWS.SCORE ? <Score /> : null}
      {gameObj.hostView === HOST_VIEWS.START_GAME ? (
        <StartGame gameId={gameObj.gameId} />
      ) : null}
      {gameObj.hostView === HOST_VIEWS.TIMER ? <Timer /> : null}
    </>
  );
};

export default Index;
