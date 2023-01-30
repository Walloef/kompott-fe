import { atom } from "nanostores";
import { HOST_VIEWS, PLAYER_VIEWS } from "../helpers/constants/ptm";

type NewType = {
  hostView?: string;
  playerView?: string;
  city?: string;
  round?: number;
  oldScore?: number;
  finalScore?: any;
  players?: string[];
  timer?: number;
  score?: number;
  name?: string;
  firstPlayer?: boolean;
  firstPlayerName?: string;
  error?: string;
  gameId?: string;
  waitingView?: string;
};

export type Game = NewType;

export const game = atom<Game>({
  hostView: HOST_VIEWS.START_GAME,
  playerView: PLAYER_VIEWS.CONNECT,
  city: "",
  round: 0,
  oldScore: 0,
  score: 0,
  name: "",
  firstPlayer: false,
  players: undefined,
  gameId: "",
  waitingView: "",
});

export function addPlayer(newPlayer: string) {
  const currPlayers = game.get().players;
  const players =
    currPlayers !== undefined ? [...currPlayers, newPlayer] : [newPlayer];
  game.set({
    ...game.get(),
    players,
  });
}

export function updateGameState(payload: Game) {
  if (game.get().round! > 0) {
    game.set({
      ...game.get(),
      ...payload,
    });
  } else {
    game.set({
      ...game.get(),
      ...payload,
      round: 0,
    });
  }
}
