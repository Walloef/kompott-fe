import { useState } from 'react';
import { connectPlayer } from '../../../connections/ptm/playerSocket';
import Heading from '../generic/Heading';
import formStyle from '../style/form.module.scss';

const Connect = () => {
  const [playerName, setPlayerName] = useState('');
  const [gameId, setGameId] = useState('');
  const onsubmit = () => {
    console.table({ playerName, gameId });
    connectPlayer(playerName, gameId);
  };
  return (
    <div className="wrapper">
      <Heading text="pin the map" />
      {/* <p>
        hej
        {gameId}
        {playerName}
      </p> */}
      <div className={formStyle.wrapper}>
        <input
          placeholder="name"
          type="text"
          className={formStyle.input}
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <input
          placeholder="game id"
          inputMode="numeric"
          pattern="[0-9]*"
          minLength={4}
          maxLength={4}
          type="text"
          className={formStyle.input}
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
        />
        <button className={formStyle.button} type="button" onClick={onsubmit}>
          Join game
        </button>
      </div>
    </div>
  );
};

export default Connect;
