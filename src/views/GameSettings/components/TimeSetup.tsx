import Modal from "@/components/Modal";
import TimeCounter from "@/components/TimeCounter";
import { useGameSettings } from "@/hooks/useGameSettings";
import { useState, type FormEvent } from "react";

type Props = {
  onClose: () => void;
};

const TimeSetup = ({ onClose }: Props) => {
  const { time, changeTime } = useGameSettings();
  const [error, setError] = useState("");
  const [timeInSeconds, setTimeInSeconds] = useState(time);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const error = changeTime(timeInSeconds);

    if (error) return setError(error);

    onClose();
  };

  return (
    <Modal title="Tiempo" onClose={onClose}>
      <form
        className="flex flex-col items-center gap-6"
        onSubmit={handleSubmit}
      >
        <TimeCounter seconds={timeInSeconds} onChange={setTimeInSeconds} />
        <button className="button" type="submit">
          Guardar
        </button>
        {error && <p className="text-center text-sm text-red-400">{error}</p>}
      </form>
    </Modal>
  );
};

export default TimeSetup;
