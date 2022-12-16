import { atom } from "nanostores";
import { HOST_VIEWS, PLAYER_VIEWS } from "../helpers/constants/ptm";

// export type Game = {
//   gameId: string,
//   firstPlayer: false,
//   firstPlayerName: "",
//   players: Array<any>,
//   playerState: string,
//   hostState: string,
//   playerName: string,
//   timer: 0,
//   timerId: 0,
//   city: string,
//   score: Array<any>,
//   finalScore: Array<any>,
//   error: string,
// };

export type Game = {
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
};

// export const ptmHostView = atom(HOST_VIEWS.START_GAME);
// export const ptmPlayerView = atom(PLAYER_VIEWS.START_GAME);

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
});

// export function updateGameView(type: "HOST" | "PLAYER", view: string) {
//   if (type === "HOST") {
//     ptmHostView.set(view);
//   } else {
//     ptmPlayerView.set(view);
//   }
// }

export function addPlayer(newPlayer: string) {
  const currPlayers = game.get().players;
  const players =
    currPlayers !== undefined ? [...currPlayers, newPlayer] : [newPlayer];
  game.set({
    ...game.get(),
    players,
  });
  console.log("currPlayers", currPlayers);
}

export function updateGameState(payload: Game) {
  console.log(game.get());
  console.log(payload);
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
