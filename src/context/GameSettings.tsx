import { MIN_PLAYERS, MIN_SPIES, MIN_TIME } from "@/constants";
import { MIN_PLAYERS_ERROR, MIN_SPIES_ERROR, MIN_TIME_ERROR } from "@/errors";
import { type Player } from "@/types";
import { MAX_TIME } from "../constants";
import { MAX_TIME_ERROR } from "../errors";
import {
  createContext,
  useCallback,
  useState,
  type PropsWithChildren,
} from "react";

type Response = string | undefined;

interface ContextProps {
  players: Player[];
  spies: number;
  time: number;

  changePlayers: (players: Player[]) => Response;
  changeSpies: (newSpies: number) => Response;
  changeTime: (newTime: number) => Response;
}

export const GameSettingsContext = createContext({} as ContextProps);

const DEFAULT_PLAYERS: Player[] = [
  { name: "Jugador 1" },
  { name: "Jugador 2" },
  { name: "Jugador 3" },
];

export const GameSettingsProvider = ({ children }: PropsWithChildren) => {
  const [players, setPlayers] = useState(DEFAULT_PLAYERS);
  const [time, setTime] = useState(180);
  const [spies, setSpies] = useState(1);

  const changePlayers = useCallback((newPLayers: Player[]) => {
    if (newPLayers.length < MIN_PLAYERS) return MIN_PLAYERS_ERROR;

    setPlayers(newPLayers);
  }, []);

  const changeSpies = useCallback(
    (newSpies: number) => {
      if (newSpies < MIN_SPIES) return MIN_SPIES_ERROR;

      const maxSpies = (players.length * 1) / 3;

      if (maxSpies < newSpies)
        return "Debe haber al menos 2 jugadores por cada espía.";

      setSpies(newSpies);
    },
    [players.length]
  );

  const changeTime = useCallback((newTime: number) => {
    if (newTime < MIN_TIME) return MIN_TIME_ERROR;
    if (newTime > MAX_TIME) return MAX_TIME_ERROR;

    setTime(newTime);
  }, []);

  return (
    <GameSettingsContext.Provider
      value={{
        players,
        spies,
        time,
        changePlayers,
        changeSpies,
        changeTime,
      }}
    >
      {children}
    </GameSettingsContext.Provider>
  );
};
