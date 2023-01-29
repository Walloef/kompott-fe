import Connect from "./Connect";
import FinalScore from "./FinalScore";
import Guessing from "./Guessing";
import StartGame from "./StartGame";
import Waiting from "./Waiting";

import { game } from "../../../store/ptnStore";
import { PLAYER_VIEWS } from "../../../helpers/constants/ptm";
import { useStore } from "@nanostores/react";
import Score from "./Score";
import "./../style/default.scss";

const Index = () => {
  const gameObj = useStore(game);

  return (
    <>
      {/* <Guessing /> */}
      {gameObj.playerView === PLAYER_VIEWS.CONNECT && <Connect />}
      {gameObj.playerView === PLAYER_VIEWS.FINAL_SCORE && <FinalScore />}
      {gameObj.playerView === PLAYER_VIEWS.GUESSING && <Guessing />}
      {gameObj.playerView === PLAYER_VIEWS.START_GAME && <StartGame />}
      {gameObj.playerView === PLAYER_VIEWS.WAITING && <Waiting />}
      {gameObj.playerView === PLAYER_VIEWS.SCORE && <Score />}
    </>
  );
};

export default Index;
