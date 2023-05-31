import { GameSettingsProvider } from "@/context/GameSettings";
import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";
import { GameStateProvider } from "@/context/GameState";
import { UIProvider } from "@/context/UI";
import { RoundsSettingsProvider } from "@/context/RoundsSettings";
import { useEffect } from "react";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", () =>
      console.log("NEFOREINSTALLPROMPT EVENT")
    );
  }, []);
  return (
    <GameSettingsProvider>
      <GameStateProvider>
        <RoundsSettingsProvider>
          <UIProvider>
            <Component {...pageProps} />
          </UIProvider>
        </RoundsSettingsProvider>
      </GameStateProvider>
    </GameSettingsProvider>
  );
};

export default MyApp;
