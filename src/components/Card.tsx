import { type Player } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

type Props = {
  player?: Player;
  word?: string;
  preventFlip?: boolean;
  isSpy?: boolean;

  onCardRevealed?: () => void;
};

const FREEZE_TIME = 1000;

const Card = ({
  word = "",
  preventFlip = false,
  isSpy = false,
  player,
  onCardRevealed,
}: Props) => {
  const [showWord, setShowWord] = useState(false);
  const [flipping, setFlipping] = useState(false);

  const handleShowWord = () => {
    if (preventFlip || flipping) return;

    setFlipping(true);
    setShowWord(true);
    setTimeout(() => setFlipping(false), FREEZE_TIME);
  };

  const handleHideWord = () => {
    if (flipping) return;

    setFlipping(true);
    setShowWord(false);
    setTimeout(() => {
      setFlipping(false);
      if (onCardRevealed) void onCardRevealed();
    }, FREEZE_TIME);
  };

  return (
    <div
      className={clsx(
        "effect-3d relative flex h-96 w-56 items-center justify-center"
      )}
    >
      <div
        className={clsx(
          "card bg-gradient-to-b from-blue-900 to-slate-800 text-xl uppercase tracking-widest",
          !showWord && "rotate-y-180"
        )}
        onClick={handleHideWord}
      >
        {isSpy ? (
          <div className="flex flex-col items-center justify-center gap-6">
            <Image
              src="/spy.png"
              alt="Espia"
              width={150}
              height={150}
              className="rounded-full border-4 border-red-900"
            />
            <span>Espía</span>
          </div>
        ) : (
          word
        )}
      </div>
      <div
        className={clsx(
          "card bg-black bg-opacity-50",
          showWord && "rotate-y-180"
        )}
        onClick={handleShowWord}
      >
        <Image
          className="h-36 w-36 rounded-full border-4 border-blue-700"
          src={player?.avatar ?? "/logo.png"}
          alt="Dorso de carta"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export default Card;
