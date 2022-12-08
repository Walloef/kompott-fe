import { useEffect } from "react";
import { HOST_VIEWS } from "../../../helpers/constants/ptm";
import { updateGameState } from "../../../store/ptnStore";

const Timer = () => {
  useEffect(() => {
    setTimeout(() => {
      updateGameState({
        hostView: HOST_VIEWS.GUESSING,
      });
    }, 5000);
  }, []);

  return <h1>TIMER</h1>;
};
export default Timer;
