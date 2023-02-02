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
  playersScore: Record<"id" | "oldScore" | "name", string | number>[];
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
  playersScore: [],
  gameId: "",
  waitingView: "",
});

export function addPlayer(newPlayer: string, id: string) {
  const currPlayers = game.get().players;
  const currentPlayersScore = game.get().playersScore;
  const players =
    currPlayers !== undefined ? [...currPlayers, newPlayer] : [newPlayer];
  const playersScore =
    currentPlayersScore.length > 0
      ? [...currentPlayersScore, { id, name: newPlayer, oldScore: 0 }]
      : [{ id, name: newPlayer, oldScore: 0 }];

  game.set({
    ...game.get(),
    playersScore,
    players,
  });

  console.log(game.get());
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
