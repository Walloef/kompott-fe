import { useStore } from "@nanostores/react";
import { game } from "../../../store/ptnStore";

const Waiting = () => {
  const gameObj = useStore(game);

  return (
    <div>
      <pre>{JSON.stringify(gameObj)}</pre>
      <p>Waiting</p>
    </div>
  );
};

export default Waiting;
