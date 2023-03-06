import { WORDS } from "@/resources/words";
import { getRandomNumber } from "./getRandomNumber";

export const getRandomWord = (usedWords: Set<string> = new Set()): string => {
  let word: string;

  while (!word) {
    const newWord = WORDS[getRandomNumber(WORDS.length)];
    if (!newWord) continue;

    if (usedWords.has(newWord)) continue;

    word = newWord;
  }

  return word;
};
