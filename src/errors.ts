import { MAX_TIME, MIN_PLAYERS, MIN_SPIES, MIN_TIME } from "./constants";

export const MIN_PLAYERS_ERROR = `Debe haber al menos ${MIN_PLAYERS} jugadores.`;

export const MIN_SPIES_ERROR = `Debe haber al menos ${MIN_SPIES} espía`;

export const MIN_TIME_ERROR = `La ronda no puede durar menos de ${MIN_TIME} segundos.`;

export const MAX_TIME_ERROR = `La ronda no puede durar más de ${
  MAX_TIME / 60
} minutos.`;
