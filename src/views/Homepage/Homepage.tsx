import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import GameSettingsResume from "./components/GameSettingsResume";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Espía</title>
        <meta name="description" content="Juego de cartas Espía" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex h-screen max-h-screen max-w-full flex-col overflow-hidden bg-gradient-to-b from-slate-900 to-blue-900 pb-14">
        <nav className="sticky top-0 mb-9 flex justify-center bg-white bg-opacity-5 py-3 shadow-2xl shadow-slate-600">
          <Image
            src={"/logo.png"}
            width={40}
            height={40}
            alt="Logo del juego"
          />
        </nav>
        <main className="flex grow flex-col">
          <GameSettingsResume />
        </main>
      </div>
    </>
  );
};

export default Home;
