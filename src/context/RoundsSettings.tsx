import { useGameState } from "@/hooks/useGameState";
import { type Round } from "@/types";
import { createRound } from "@/utils/createRound";
import { createContext, useState, type PropsWithChildren } from "react";
import { useGameSettings } from "../hooks/useGameSettings";

interface ContextProps {
  rounds: Round[];
  currentRound: Round;
  loading: boolean;
  roundsPlayed: number;

  startRound: () => Promise<Round>;
  resetRound: () => Promise<Round>;
  endRound: () => void;
}

export const RoundsSettingsContext = createContext({} as ContextProps);

export const RoundsSettingsProvider = ({ children }: PropsWithChildren) => {
  const { spiesQuantity, players } = useGameSettings();
  const { backToMenu } = useGameState();
  const [loading, setLoading] = useState(true);
  const [rounds, setRounds] = useState<Round[]>([]);
  const [usedWords, setUsedWords] = useState(new Set<string>());
  const [roundsPlayed, setRoundsPlayed] = useState(0);

  const startRound = async () => {
    setLoading(true);
    const round = await createRound({ players, spiesQuantity, usedWords });

    setUsedWords((prev) => new Set([...prev, round.word]));
    setRoundsPlayed((prev) => prev + 1);
    setRounds((prev) => [...prev, round]);
    setLoading(false);

    return round;
  };

  const resetRound = async () => {
    setLoading(true);
    const newRound = await createRound({ players, spiesQuantity, usedWords });
    const currentRound = rounds[roundsPlayed - 1];

    if (!currentRound) throw new Error("INTERNAL ERROR");

    const resettedRound = {
      ...newRound,
      timesResetted: currentRound.timesResetted + 1,
    };

    setUsedWords((prev) => new Set([...prev, newRound.word]));
    setRounds((prev) => {
      const roundsCopy = [...prev];
      roundsCopy.pop();

      return [...roundsCopy, resettedRound];
    });
    setLoading(false);

    return newRound;
  };

  const endRound = backToMenu;

  return (
    <RoundsSettingsContext.Provider
      value={{
        loading,
        rounds,
        currentRound: rounds[roundsPlayed - 1],
        roundsPlayed,

        startRound,
        resetRound,
        endRound,
      }}
    >
      {children}
    </RoundsSettingsContext.Provider>
  );
};
