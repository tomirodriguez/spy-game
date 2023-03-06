import NavBar from "@/components/NavBar";
import { useGameState } from "@/hooks/useGameState";
import CardsShow from "@/views/CardsShow";
import GameSettings from "@/views/GameSettings";
import Head from "next/head";
import { useRoundsSettings } from "../hooks/useRoundsSettings";

const Home = () => {
  const { state, nextStep } = useGameState();
  const { startRound, currentRound } = useRoundsSettings();

  const handleGameStart = async () => {
    nextStep();
    await startRound();
    nextStep();
  };

  return (
    <>
      <Head>
        <title>Espía</title>
        <meta name="description" content="Juego de cartas Espía" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex h-screen max-h-screen max-w-full flex-col overflow-hidden bg-gradient-to-b from-slate-900 to-blue-900 pb-14">
        <NavBar />
        <main className="flex grow flex-col">
          {state === "resume" && <GameSettings onStart={handleGameStart} />}
          {state === "creating-round" && <div>loading</div>}
          {state === "cards" && (
            <CardsShow round={currentRound} onStartRound={nextStep} />
          )}
          {state === "playing" && <div>JUEGO</div>}
          {state === "finish" && <div>JUEGO TERMINADO</div>}
        </main>
      </div>
    </>
  );
};

export default Home;
