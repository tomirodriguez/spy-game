import { useContext } from "react";
import { RoundsSettingsContext } from "../context/RoundsSettings";

export const useRoundsSettings = () => useContext(RoundsSettingsContext);
