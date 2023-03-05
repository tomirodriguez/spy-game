import { type GameState } from "@/types";
import { createContext, useState, type PropsWithChildren } from "react";

interface ContextProps {
  state: GameState;

  nextStep: () => void;
  previousStep: () => void;
  backToMenu: () => void;
  restartCards: () => void;
}

export const GameStateContext = createContext({} as ContextProps);

const STATES: GameState[] = ["resume", "cards", "playing", "finish"];

export const GameStateProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState(0);

  const nextStep = () => {
    if (state >= STATES.length) throw new Error("Game has already end.");

    setState((prev) => prev + 1);
  };

  const previousStep = () => {
    if (state === 0) throw new Error("Game is already in the first step.");

    setState((prev) => prev - 1);
  };

  const backToMenu = () => {
    setState(0);
  };

  const restartCards = () => {
    const newState = STATES.indexOf("cards");
    if (!newState) throw new Error("Internal error: couldn't reset the cards.");

    setState(newState);
  };

  return (
    <GameStateContext.Provider
      value={{
        state: STATES[state] ?? "resume",
        nextStep,
        previousStep,
        backToMenu,
        restartCards,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
};
``;
