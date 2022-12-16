import { useStore } from "@nanostores/react";
import { game } from "../../../store/ptnStore";

const Guessing = () => {
  const gameObj = useStore(game);

  return <div>{gameObj.city}</div>;
};

export default Guessing;
