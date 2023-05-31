import { GameSettingsProvider } from "@/context/GameSettings";
import { type AppType } from "next/dist/shared/lib/utils";

import InstallButton from "@/components/InstallButton";
import { GameStateProvider } from "@/context/GameState";
import { RoundsSettingsProvider } from "@/context/RoundsSettings";
import { UIProvider } from "@/context/UI";
import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <GameSettingsProvider>
        <GameStateProvider>
          <RoundsSettingsProvider>
            <UIProvider>
              <Component {...pageProps} />
            </UIProvider>
          </RoundsSettingsProvider>
        </GameStateProvider>
      </GameSettingsProvider>
      <InstallButton />
    </>
  );
};

export default MyApp;
