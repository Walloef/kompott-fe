import { atom } from "nanostores";
import { HOST_VIEWS, PLAYER_VIEWS } from "../helpers/constants/ptm";

type PlayerGuessed = { name: string; color: string };

type TGame = {
  hostView?: string;
  playerView?: string;
  waitingView?: string;
  city: string;
  round: number;
  // oldScore?: number;
  finalScore?: any;
  players?: string[];
  // playersScore: Record<"id" | "oldScore" | "name", string | number>[];
  timer?: number;
  // score?: number;
  // name?: string;
  // firstPlayer?: boolean;
  // firstPlayerName?: string;
  error?: string;
  gameId?: string;
  playersGuessed: PlayerGuessed[];
};

export const game = atom<TGame>({
  hostView: HOST_VIEWS.START_GAME,
  playerView: PLAYER_VIEWS.CONNECT,
  waitingView: "",
  city: "",
  round: 0,
  // oldScore: 0,
  // score: 0,
  // name: "",
  // firstPlayer: false,
  players: [],
  // playersScore: [],
  gameId: "",
  playersGuessed: [],
});

export function guessPlaced({
  playerView,
  waitingView,
}: {
  playerView: string;
  waitingView: string;
}) {
  game.set({
    ...game.get(),
    playerView,
    waitingView,
  });
}

export function addPlayer(newPlayer: string, id: string) {
  const currPlayers = game.get().players;
  // const currentPlayersScore = game.get().playersScore;
  const players =
    currPlayers !== undefined ? [...currPlayers, newPlayer] : [newPlayer];
  // const playersScore =
  //   currentPlayersScore.length > 0
  //     ? [...currentPlayersScore, { id, name: newPlayer, oldScore: 0 }]
  //     : [{ id, name: newPlayer, oldScore: 0 }];

  game.set({
    ...game.get(),
    // playersScore,
    players,
  });

  console.log(game.get());
}

export function setTimer(timer: number) {
  game.set({
    ...game.get(),
    timer,
  });
}

export function setStringPayload(payload: { [key: string]: string }) {
  game.set({
    ...game.get(),
    ...payload,
  });
}

export function changeView(view: string) {
  game.set({
    ...game.get(),
    hostView: view,
  });
}

// export function setFinalScore(city: string) {
//   game.set({
//     ...game.get(),
//     city,
//   });
// }

export function playerGuessed(player: PlayerGuessed) {
  const currenPlayersGuessed = game.get().playersGuessed;
  game.set({
    ...game.get(),
    playersGuessed: [...currenPlayersGuessed, player],
  });
}

export function resetPlayerConnected() {
  game.set({
    ...game.get(),
    playersGuessed: [],
  });
}

export function updateGameState(payload: TGame) {
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
