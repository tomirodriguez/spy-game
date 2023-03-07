import Card from "@/components/Card";
import Reset from "@/icons/Reset";
import { type Round } from "@/types";
import { useState } from "react";
import { useRoundsSettings } from "../../hooks/useRoundsSettings";
import ResetModal from "./components/ResetModal";

type Props = {
  round?: Round;
  onStartRound: () => void;
};

const CardsShow = ({ round, onStartRound }: Props) => {
  const { resetRound, loading, roundsPlayed, playersOrder } =
    useRoundsSettings();
  const [playerTurn, setPlayerTurn] = useState(0);
  const [showResetModal, setShowResetModal] = useState(false);

  if (!round) return <Card preventFlip />;

  const showReset = () => setShowResetModal(true);

  const closeReset = () => setShowResetModal(false);

  const handleResetRound = async () => {
    setPlayerTurn(0);
    await resetRound().then(closeReset);
  };

  const { spies, word } = round;
  const player = playersOrder[playerTurn];

  return (
    <section className="container flex max-w-md grow flex-col items-center justify-center gap-10 text-white">
      <div className="flex items-center gap-9">
        <h1 className="text-3xl uppercase tracking-widest">{`Ronda ${roundsPlayed}`}</h1>
        <button className="relative" onClick={showReset}>
          <Reset size={40} />
          <span className="absolute bottom-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-orange-300 text-xs text-black">
            {round.timesResetted}
          </span>
        </button>
      </div>

      {loading && <Card preventFlip />}
      {!loading && (
        <Card
          isSpy={player && spies.has(player)}
          player={player}
          word={word}
          onCardRevealed={() => setPlayerTurn((prev) => prev + 1)}
          preventFlip={playerTurn === playersOrder.length}
        />
      )}

      {player ? (
        <p className="text-xl uppercase tracking-widest">{player.name}</p>
      ) : (
        <div className="button" onClick={onStartRound}>
          EMPEZAR
        </div>
      )}
      {showResetModal && (
        <ResetModal onClose={closeReset} onReset={handleResetRound} />
      )}
    </section>
  );
};

export default CardsShow;
