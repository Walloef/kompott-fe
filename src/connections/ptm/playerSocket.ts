import {
  HubConnectionBuilder,
  HttpTransportType,
  HubConnection,
} from "@microsoft/signalr";
import { updateGameState } from "../../store/ptnStore";

declare global {
  interface Window {
    connection: HubConnection;
  }
}

export function connectPlayer(name: string, gameId: string) {
  const url = `https://pinthemapbaseapp.azurewebsites.net/gamehub?name=${name}&gameid=${gameId}`;
  window.connection = new HubConnectionBuilder()
    .withUrl(url, {
      transport: HttpTransportType.WebSockets,
      skipNegotiation: true, // more saftey!
    })
    .build();

  window.connection.on("ClientMessage", (event: any) => {
    console.log(event.payload);
    switch (event.name) {
      case "Connected":
        updateGameState({
          firstPlayer: event.payload.firstPlayer,
          gameId: gameId,
        });
        break;
      case "StateUpdate":
        updateGameState({
          playerView: event.payload,
        });
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
