import { type Player } from "@/types";

const createId = () => Math.floor(Math.random() * 1000);

export const createRandomPlayer = (existentPlayers: Player[]): Player => {
  let newId = createId();

  while (!!existentPlayers.find(({ id }) => id === newId)) {
    newId = createId();
  }

  return { id: newId, name: `Jugador ${newId}` };
};
