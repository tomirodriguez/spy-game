/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState, useEffect } from "react";

let deferredPrompt: any;

const InstallButton: React.FC = () => {
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: any) => {
      event.preventDefault();
      alert(JSON.stringify(event));

      deferredPrompt = event;
      setShowInstallButton(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      alert("SE VA A TIRAR EL PROMPT");
      deferredPrompt.prompt();

      alert("SE TIRO AL PROMPT");

      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        deferredPrompt = null;
      });
    }
  };

  if (!showInstallButton) {
    return null;
  }

  return (
    <div className="justify-bottom absolute top-0 flex h-screen w-screen items-center">
      <div className="flex w-full justify-center bg-white py-4">
        <button className="text-black" onClick={handleInstall}>
          Install App
        </button>
      </div>
    </div>
  );
};

export default InstallButton;
