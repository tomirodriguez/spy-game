import Counter from "@/components/Counter";
import Modal from "@/components/Modal";
import { useGameSettings } from "@/hooks/useGameSettings";
import { useState, type FormEvent } from "react";

type Props = {
  onClose: () => void;
};

const SpiesSetup = ({ onClose }: Props) => {
  const { spies, changeSpies } = useGameSettings();
  const [error, setError] = useState("");
  const [amountOfSpies, setamountOfSpies] = useState(spies);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setError("");

    const error = changeSpies(amountOfSpies);

    if (error) return setError(error);

    onClose();
  };

  return (
    <Modal title="Espías" onClose={onClose}>
      <form
        className="flex flex-col items-center gap-6"
        onSubmit={handleSubmit}
      >
        <Counter amount={amountOfSpies} onChange={setamountOfSpies} />
        <button className="button" type="submit">
          Guardar
        </button>
        {error && <p className="text-center text-sm text-red-400">{error}</p>}
      </form>
    </Modal>
  );
};

export default SpiesSetup;
