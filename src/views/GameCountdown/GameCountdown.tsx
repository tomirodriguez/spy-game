import Timer from "@/icons/Timer";
import { useEffect, useState } from "react";

import { useGameSettings } from "../../hooks/useGameSettings";
import { secondsToDate } from "../../utils/secondsToDate";
import clsx from "clsx";

type Props = {
  onBackToHome: () => void;
  onStartNewRound: () => void;
};

const GameCountdown = ({ onBackToHome, onStartNewRound }: Props) => {
  const { time, spiesQuantity } = useGameSettings();
  const [pause, setPause] = useState(false);
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    if (timeLeft <= 0 || pause) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, pause]);

  const isGameFinished = timeLeft <= 0;

  return (
    <section className="container flex max-w-md grow flex-col items-center justify-center gap-10 text-white">
      {isGameFinished ? (
        <p className="text-2xl uppercase tracking-wider">Juego terminado</p>
      ) : (
        <p className="w-72 text-center text-2xl uppercase tracking-wide">
          Encuentren
          {`${
            spiesQuantity === 1
              ? " al imbécil que va a decir cualquier palabra."
              : " a los giles que van a inventar palabras para zafar."
          }`}
        </p>
      )}
      <Timer size={160} />
      {!isGameFinished ? (
        <>
          <p
            className={clsx(
              "text-6xl ",
              timeLeft < 20 ? "text-red-500" : "text-gray-50",
              pause && "text-opacity-40"
            )}
          >
            {secondsToDate(timeLeft)}
          </p>
          <button className="button" onClick={() => setPause((prev) => !prev)}>
            {pause ? "Reanudar" : "Pausar"}
          </button>
        </>
      ) : (
        <div className="mt-8 flex w-full gap-4">
          <button className="button-cancel grow text-sm" onClick={onBackToHome}>
            Menu
          </button>
          <button className="button grow text-sm" onClick={onStartNewRound}>
            Reiniciar
          </button>
        </div>
      )}
    </section>
  );
};

export default GameCountdown;
