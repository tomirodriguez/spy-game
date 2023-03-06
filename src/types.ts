import { z } from "zod";

const PlayerSchema = z.object({
  name: z
    .string({ required_error: "Debe tener un nombre." })
    .min(2, { message: "Al nombre debe tener al menos 2 letras" }),
});

export type Player = z.infer<typeof PlayerSchema>;

const GameStateSchema = z.enum([
  "resume",
  "creating-round",
  "cards",
  "playing",
  "finish",
]);

export type GameState = z.infer<typeof GameStateSchema>;

const SettingSetupSchema = z.enum(["players", "spies", "time"]);

export type SettingSetup = z.infer<typeof SettingSetupSchema>;

export type Round = {
  word: string;
  spies: Set<Player>;
  timesResetted: number;
};
