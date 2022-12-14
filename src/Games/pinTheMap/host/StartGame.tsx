import { useStore } from '@nanostores/react';
import { HOST_VIEWS } from '../../../helpers/constants/ptm';
import { updateGameState, game } from '../../../store/ptnStore';
import Heading from '../generic/Heading';

const StartGame = ({ gameId }: { gameId: string | undefined }) => {
  const gameObj = useStore(game);

  return (
    <div>
      <Heading text="start game" />
      <p>{gameId}</p>
      {gameObj.players && gameObj.players.map((x) => <p>{x}</p>)}

      {['Benju', 'Banei', 'Nasom', 'Kralle', 'Ninjagrisen', 'Märta'].map(
        (x, idx) => (
          <p key={idx}>{x}</p>
        )
      )}
      <button
        onClick={() => {
          updateGameState({
            ...gameObj,
            hostView: HOST_VIEWS.TIMER,
          });
        }}
      >
        Next view
      </button>
    </div>
  );
};

export default StartGame;
