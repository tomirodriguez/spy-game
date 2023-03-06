import { type Player } from "@/types";
import { getRandomNumber } from "./getRandomNumber";

type Props = {
  players: Player[];
  spiesQuantity: number;
};

export const getSpies = ({ players, spiesQuantity }: Props): Set<Player> => {
  const spies = new Set<Player>();

  while (spies.size < spiesQuantity) {
    const newSpyIndex = getRandomNumber(players.length);
    const player = players[newSpyIndex];
    if (player && !spies.has(player)) spies.add(player);
  }

  return spies;
};
