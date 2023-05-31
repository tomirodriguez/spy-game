import React, { useState, useEffect } from "react";

interface CustomWindow extends Window {
  deferredPrompt: any;
}

const InstallButton: React.FC = () => {
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      console.log("QUE ONDA ESTO", event);
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
    const promptEvent = new Promise((resolve) => {
      const handleUserChoice = (choiceResult: any) => {
        resolve(choiceResult);
        setShowInstallButton(false);
      };

      (window as unknown as CustomWindow).addEventListener(
        "appinstalled",
        handleUserChoice
      );

      if ((window as unknown as CustomWindow).deferredPrompt) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        (window as unknown as CustomWindow).deferredPrompt.prompt();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        (window as unknown as CustomWindow).deferredPrompt.userChoice.then(
          handleUserChoice
        );
      }
    });

    void promptEvent.then((choiceResult: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the installation");
      }
    });
  };

  if (!showInstallButton) {
    return null;
  }

  return (
    <div className="absolute flex h-screen w-screen items-center justify-center">
      <button onClick={handleInstall}>Install App</button>;
    </div>
  );
};

export default InstallButton;
