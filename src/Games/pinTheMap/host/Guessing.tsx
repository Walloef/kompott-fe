import { useStore } from "@nanostores/react";
import { game } from "../../../store/ptnStore";
import Heading from "../generic/Heading";

const Guessing = () => {
  const gameObj = useStore(game);

  return <Heading text={gameObj.city} thinSpacing />;
};

export default Guessing;
