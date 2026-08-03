import DeskScene from "./components/DeskScene";

// TODO: replace with real auth/player id once you wire up sign-in.
// For now, everyone shares one hardcoded playerId doc in Firestore
// so you can test read/write end to end.
const TEMP_PLAYER_ID = "player-dev-1";

export default function App() {
  return <DeskScene playerId={TEMP_PLAYER_ID} />;
}
