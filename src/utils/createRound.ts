import { type Player, type Round } from "@/types";
import { getRandomWord } from "./getRandomWord";
import { getSpies } from "./getSpies";

type Props = {
  usedWords: Set<string>;
  players: Player[];
  spiesQuantity: number;
};

export const createRound = async ({
  players,
  spiesQuantity,
  usedWords,
}: Props): Promise<Round> =>
  new Promise((resolve) => {
    const word = getRandomWord(usedWords);
    const spies = getSpies({ players, spiesQuantity });

    const newRound: Round = {
      word,
      spies,
      timesResetted: 0,
    };
    resolve(newRound);
  });
