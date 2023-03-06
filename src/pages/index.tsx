import { useGameState } from "@/hooks/useGameState";
import CardsShow from "@/views/CardsShow";
import GameSettings from "@/views/GameSettings";
import Head from "next/head";
import Image from "next/image";

const Home = () => {
  const { state, nextStep } = useGameState();

  return (
    <>
      <Head>
        <title>Espía</title>
        <meta name="description" content="Juego de cartas Espía" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex h-screen max-h-screen max-w-full flex-col overflow-hidden bg-gradient-to-b from-slate-900 to-blue-900 pb-14">
        <nav className="sticky top-0 mb-9 flex justify-center py-3">
          <Image
            src={"/logo.png"}
            width={40}
            height={40}
            alt="Logo del juego"
          />
        </nav>
        <main className="flex grow flex-col">
          {state === "resume" && <GameSettings onStart={nextStep} />}
          {state === "cards" && <CardsShow onCardsShowed={nextStep} />}
          {state === "playing" && <div>JUEGO</div>}
          {state === "finish" && <div>JUEGO TERMINADO</div>}
        </main>
      </div>
    </>
  );
};

export default Home;
