export async function sendServer(
  gameId: string,
  method: string,
  payload: string | null = null
) {
  window.connection
    .invoke("ServerMessage", gameId, method, payload)
    .catch((err: Error) => console.error(err.message));
}
