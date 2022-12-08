import type { HubConnection } from "@microsoft/signalr";

declare global {
  interface Window {
    connection: HubConnection;
  }
}
