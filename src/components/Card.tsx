import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

type Props = {
  word: string;
};

const Card = ({ word }: Props) => {
  const [showWord, setShowWord] = useState(false);

  return (
    <div
      className={clsx(
        "effect-3d relative flex h-96 w-56 items-center justify-center"
      )}
      onClick={() => setShowWord(!showWord)}
    >
      <div
        className={clsx(
          "card bg-gradient-to-b from-blue-900 to-slate-800 uppercase tracking-widest",
          !showWord && "rotate-y-180"
        )}
      >
        {word}
      </div>
      <div
        className={clsx(
          "card bg-black bg-opacity-50",
          showWord && "rotate-y-180"
        )}
      >
        <Image
          className="rounded-full border-4 border-blue-700"
          src="/mau.png"
          alt="Dorso de carta"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export default Card;
