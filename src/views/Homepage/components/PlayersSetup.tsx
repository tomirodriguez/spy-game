import Counter from "@/components/Counter";
import Modal from "@/components/Modal";
import { useGameSettings } from "@/hooks/useGameSettings";
import { type Player } from "@/types";
import { useState } from "react";
import { useForm } from "react-hook-form";

type Props = {
  onClose: () => void;
};

type FormField = { [key: string]: string };

const PlayersSetup = ({ onClose }: Props) => {
  const { players, changePlayers } = useGameSettings();
  const [error, setError] = useState("");
  const [amountOfPlayers, setAmountOfPlayers] = useState(players.length);

  const { handleSubmit, register } = useForm<FormField>();

  const savePlayers = (data: FormField) => {
    setError("");
    const newPlayers: Player[] = [];
    for (let i = 0; i < amountOfPlayers; i++) {
      const name: string = data[`player-${i}`] ?? "";

      if (name) newPlayers.push({ name });
    }

    const error = changePlayers(newPlayers);
    if (error) return setError(error);

    onClose();
  };

  return (
    <Modal title="Jugadores" onClose={onClose}>
      <form
        className="flex flex-col items-center gap-6"
        onSubmit={handleSubmit(savePlayers)}
      >
        <Counter amount={amountOfPlayers} onChange={setAmountOfPlayers} />
        <div className="flex max-h-[400px] w-full flex-col items-center gap-4 overflow-y-scroll">
          {[...Array(amountOfPlayers).keys()].map((index) => (
            <div key={`player-${index}`}>
              <input
                className="w-full border-b border-solid border-b-gray-500 bg-transparent py-1 text-center outline-none"
                type="text"
                defaultValue={players[index]?.name || `Jugador ${index + 1}`}
                {...register(`player-${index}`)}
              />
            </div>
          ))}
        </div>
        <button className="button" type="submit">
          Guardar
        </button>
        {error && <p className="text-sm text-red-400">{error}</p>}
      </form>
    </Modal>
  );
};

export default PlayersSetup;
