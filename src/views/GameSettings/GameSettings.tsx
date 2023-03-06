import { useGameSettings } from "@/hooks/useGameSettings";
import ChevronRight from "@/icons/ChevronRight";
import Timer from "@/icons/Timer";
import { type SettingSetup } from "@/types";
import { secondsToDate } from "@/utils/secondsToDate";
import Image from "next/image";
import { useCallback, useState } from "react";
import PlayersSetup from "./components/PlayersSetup";
import SpiesSetup from "./components/SpiesSetup";
import TimeSetup from "./components/TimeSetup";

type Props = {
  onStart: () => void;
};

const GameSettings = ({ onStart }: Props) => {
  const { players, spies, time } = useGameSettings();
  const [settingSetup, setSettingSetup] = useState<SettingSetup>();

  const closeSetup = useCallback(() => setSettingSetup(undefined), []);

  return (
    <section className="container flex max-w-md grow flex-col items-center gap-6 text-white">
      <button
        className="button-resume"
        onClick={() => setSettingSetup("players")}
      >
        <Image src={"/emi.png"} alt={"Jugadores"} height={48} width={48} />
        <p>Jugadores</p>
        <span className="ml-auto">{players.length}</span>
        <ChevronRight />
      </button>
      <button
        className="button-resume"
        onClick={() => setSettingSetup("spies")}
      >
        <Image src={"/maru.png"} alt={"Espias"} width={48} height={48} />
        <p>Espías</p>
        <span className="ml-auto">{spies}</span>
        <ChevronRight />
      </button>
      <button className="button-resume" onClick={() => setSettingSetup("time")}>
        <span className="flex w-12 items-center justify-center">
          <Timer size={30} />
        </span>
        <p>Tiempo</p>

        <span className="ml-auto">{secondsToDate(time)}</span>
        <ChevronRight />
      </button>

      <button className="mt-auto flex w-full flex-col items-center justify-center gap-3">
        <Image
          className="mt-auto"
          src="/guada.png"
          alt={"Espia"}
          width={80}
          height={100}
          priority
        />
        <p className="button" onClick={onStart}>
          Empezar
        </p>
      </button>
      {settingSetup === "players" && <PlayersSetup onClose={closeSetup} />}
      {settingSetup === "spies" && <SpiesSetup onClose={closeSetup} />}
      {settingSetup === "time" && <TimeSetup onClose={closeSetup} />}
    </section>
  );
};

export default GameSettings;
