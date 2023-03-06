import { type GameState } from "@/types";
import { createContext, useState, type PropsWithChildren } from "react";

interface ContextProps {
  state: GameState;

  nextStep: () => void;
  previousStep: () => void;
  backToMenu: () => void;
}

export const GameStateContext = createContext({} as ContextProps);

const STATES: GameState[] = ["resume", "cards", "playing"];

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

  return (
    <GameStateContext.Provider
      value={{
        state: STATES[state] ?? "resume",
        nextStep,
        previousStep,
        backToMenu,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
};
``;
