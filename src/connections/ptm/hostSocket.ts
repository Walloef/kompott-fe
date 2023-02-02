import {
  HubConnectionBuilder,
  HttpTransportType,
  HubConnection,
} from "@microsoft/signalr";
import { addPlayer, game, updateGameState } from "../../store/ptnStore";

declare global {
  interface Window {
    connection: HubConnection;
  }
}

export function connectHost() {
  const url = "https://pinthemapbaseapp.azurewebsites.net/gamehub?host=true";
  window.connection = new HubConnectionBuilder()
    .withUrl(url, {
      transport: HttpTransportType.WebSockets,
      skipNegotiation: true, // more saftey!
    })
    .build();
  window.connection.on("ClientMessage", (event: any) => {
    switch (event.name) {
      case "Connected":
        console.log(event.payload.id);
        addPlayer(event.payload.name, event.payload.id);
        break;
      case "StateUpdate":
        updateGameState({ hostView: event.payload });
        break;
      case "Timer":
        updateGameState({ timer: event.payload });
        break;
      case "City":
        updateGameState({ city: event.payload });
        break;
      case "Score":
        updateGameState({ score: event.payload.scoreItems });
        break;

      case "FinalScore":
        updateGameState({ finalScore: event.payload });
        break;

      case "GameId":
        updateGameState({ gameId: event.payload });
        break;

      case "Error":
        updateGameState({ error: event.payload.message });
        window.connection.stop();

      default:
        console.info("no case for");
        break;
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
