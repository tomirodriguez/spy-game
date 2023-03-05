import { GameSettingsProvider } from "@/context/GameSettings";
import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";
import { GameStateProvider } from "@/context/GameState";
import { UIProvider } from "@/context/UI";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <GameSettingsProvider>
      <GameStateProvider>
        <UIProvider>
          <Component {...pageProps} />
        </UIProvider>
      </GameStateProvider>
    </GameSettingsProvider>
  );
};

export default MyApp;
