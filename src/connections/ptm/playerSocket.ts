import {
  HubConnectionBuilder,
  HttpTransportType,
  HubConnection,
} from "@microsoft/signalr";
import { game, updateGameState } from "../../store/ptnStore";

declare global {
  interface Window {
    connection: HubConnection;
  }
}

export const x = () => {
  console.log("from store", game.get().hostView);
};

export function connectPlayer(name: string, gameId: string) {
  const url = `https://pinthemapbaseapp.azurewebsites.net/gamehub?name=${name}&gameid=${gameId}`;
  window.connection = new HubConnectionBuilder()
    .withUrl(url, {
      transport: HttpTransportType.WebSockets,
      skipNegotiation: true, // more saftey!
    })
    .build();

  window.connection.on("ClientMessage", (event: any) => {
    console.log(event);
    switch (event.name) {
      case "PlayerConnected":
        updateGameState({ firstPlayer: event.payload.firstPlayer });

        if (event.payload.firstPlayer) {
          updateGameState({ firstPlayerName: event.payload.firstPlayer });
        }
        break;
      case "StateUpdate":
        updateGameState(event.payload);
        break;
      default:
        console.log(event);
    }
  });

  window.connection
    .start()
    .then(() => {
      console.log(window.connection);
    })
    .catch((e: Error) => {
      console.log(e.message);
    });
}
