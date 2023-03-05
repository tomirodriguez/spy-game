import { useContext } from "react";
import { GameSettingsContext } from "../context/GameSettings";

export const useGameSettings = () => useContext(GameSettingsContext);
