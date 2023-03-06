import Image from "next/image";
import { useRoundsSettings } from "../hooks/useRoundsSettings";
import { useGameState } from "../hooks/useGameState";
import Back from "@/icons/Back";
import { useState } from "react";
import Modal from "./Modal";

const NavBar = () => {
  const [showExitRoundModal, setShowExitRoundModal] = useState(false);
  const { state } = useGameState();
  const { endRound } = useRoundsSettings();

  const showBackToMenu = state === "cards" || state === "playing";

  const closeExitModal = () => setShowExitRoundModal(false);

  const handleEndRound = () => {
    endRound();
    closeExitModal();
  };

  return (
    <nav className="sticky top-0 z-50 mb-9 flex py-4 px-4">
      <div className="flex h-10 w-10 items-center justify-center">
        {showBackToMenu && (
          <button onClick={() => setShowExitRoundModal(true)}>
            <Back size={40} />
          </button>
        )}
      </div>

      <Image
        className="mx-auto"
        src={"/logo.png"}
        width={40}
        height={40}
        alt="Logo del juego"
      />
      <div className="h-10 w-10" />
      {showExitRoundModal && (
        <Modal onClose={closeExitModal} title="Terminar ronda">
          <p className="text-center">
            Estás seguro que queres terminar la ronda ?
          </p>
          <div className="mt-8 flex gap-4">
            <button
              className="button-cancel grow text-sm"
              onClick={closeExitModal}
            >
              Cancelar
            </button>
            <button className="button grow text-sm" onClick={handleEndRound}>
              Aceptar
            </button>
          </div>
        </Modal>
      )}
    </nav>
  );
};

export default NavBar;
