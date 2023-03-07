import Counter from "@/components/Counter";
import Modal from "@/components/Modal";
import { useGameSettings } from "@/hooks/useGameSettings";
import ChevronDown from "@/icons/ChevronDown";
import ChevronUp from "@/icons/ChevronUp";
import { type Player } from "@/types";
import { createRandomPlayer } from "@/utils/createRandomPlayer";
import { changePositionFromArray } from "@/utils/changePositionFromArray";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Trash from "@/icons/Trash";

type Props = {
  onClose: () => void;
};

type FormField = { [key: string]: string };

const PlayersSetup = ({ onClose }: Props) => {
  const { players, changePlayers } = useGameSettings();
  const [newPlayers, setNewPlayers] = useState([...players]);
  const [error, setError] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormField>();

  const savePlayers = (data: FormField) => {
    setError("");

    const playersToSave = newPlayers.map((newPlayer) => {
      const name = data[`player-${newPlayer.id}`];
      if (!name) throw new Error("Hubo un error con los nombres.");

      return { ...newPlayer, name };
    });

    const error = changePlayers(playersToSave);
    if (error) return setError(error);

    onClose();
  };

  const changePlayerOrder = (playerIndex: number, newPlayerIndex: number) => {
    const newArray = changePositionFromArray(
      newPlayers,
      playerIndex,
      newPlayerIndex
    );

    setNewPlayers(newArray);
  };

  const handleMoveUp = (playerIndex: number) => {
    if (playerIndex === 0) return;

    changePlayerOrder(playerIndex, playerIndex - 1);
  };

  const handleMoveDown = (playerIndex: number) => {
    if (playerIndex === players.length - 1) return;

    changePlayerOrder(playerIndex, playerIndex + 1);
  };

  const handleNewPlayersAmount = (newAmount: number) => {
    const changedPlayers: Player[] = [];
    for (let i = 0; i < newAmount; i++) {
      const previousPlayer = newPlayers[i];

      if (previousPlayer) changedPlayers.push(previousPlayer);
      else changedPlayers.push(createRandomPlayer(changedPlayers));
    }

    setNewPlayers(changedPlayers);
  };

  const handleRemovePlayer = (playerId: number) => {
    setNewPlayers((prev) => prev.filter((player) => player.id !== playerId));
  };

  return (
    <Modal title="Jugadores" onClose={onClose}>
      <form
        className="flex flex-col items-center gap-6"
        onSubmit={handleSubmit(savePlayers)}
      >
        <Counter amount={newPlayers.length} onChange={handleNewPlayersAmount} />
        <div className="flex max-h-[400px] w-full flex-col items-center gap-4 overflow-y-scroll">
          {newPlayers.map(({ id, name, avatar }, index) => (
            <div key={id}>
              <div className="relative flex w-full shrink-0 items-center rounded-full bg-blue-200 bg-opacity-5 p-2">
                <button
                  type="button"
                  className="absolute top-0 left-0 rounded-full bg-gray-300 p-1"
                  onClick={() => handleRemovePlayer(id)}
                >
                  <Trash size={15} />
                </button>
                <Image
                  src={avatar ?? "/logo.png"}
                  alt="Generic player avatar"
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-gray-600"
                />
                <input
                  className="w-full bg-transparent py-1 text-center text-xl outline-none"
                  type="text"
                  defaultValue={name}
                  {...register(`player-${id}`, {
                    required: {
                      value: true,
                      message: "Ponele un nombre al guacho, ortiva.",
                    },
                  })}
                />
                <button
                  type="button"
                  className="flex h-10 w-10 shrink-0 items-center justify-center"
                  onClick={() => handleMoveDown(index)}
                >
                  <ChevronDown />
                </button>
                <button
                  type="button"
                  className="flex h-10 w-10 shrink-0 items-center justify-center"
                  onClick={() => handleMoveUp(index)}
                >
                  <ChevronUp />
                </button>
              </div>
              {errors[`player-${id}`]?.message && (
                <p className="mt-2 text-center text-xs text-red-400">
                  {errors[`player-${id}`]?.message}
                </p>
              )}
            </div>
          ))}
        </div>
        <button className="button" type="submit">
          Guardar
        </button>
        {error && <p className="text-center text-sm text-red-400">{error}</p>}
      </form>
    </Modal>
  );
};

export default PlayersSetup;
