import { useStore } from "@nanostores/react";
import { game } from "../../../store/ptnStore";

const Score = () => {
  const gameObj = useStore(game);

  return (
    <>
      <pre>{JSON.stringify(gameObj)}</pre>
      <div>Score</div>
    </>
  );
};

export default Score;
