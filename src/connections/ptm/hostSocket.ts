import {
  HubConnectionBuilder,
  HttpTransportType,
  HubConnection,
} from "@microsoft/signalr";
import {
  addPlayer,
  changeView,
  game,
  playerGuessed,
  resetPlayerConnected,
  setStringPayload,
  setTimer,
  updateGameState,
} from "../../store/ptnStore";

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
        addPlayer(event.payload.name, event.payload.id);
        break;
      case "StateUpdate":
        setStringPayload({ hostView: event.payload });
        break;
      case "Timer":
        setTimer(event.payload);
        break;
      case "City":
        setStringPayload({ city: event.payload });
        resetPlayerConnected();
        break;
      case "Score":
        console.log(
          "Score",
          event.payload.scoreItems,
          typeof event.payload.scoreItems
        );
        updateGameState({ score: event.payload.scoreItems });
        break;
      case "PlayerGuessed":
        playerGuessed({ name: "playerName", color: "#fff" });
        break;

      case "GameId":
        setStringPayload({ gameId: event.payload });
        break;

      case "Error":
        updateGameState({ error: event.payload.message });
        window.connection.stop();

      default:
        console.info(`no case for ${event.name}`);
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
