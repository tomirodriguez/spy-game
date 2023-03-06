import { secondsToDate } from "@/utils/secondsToDate";
import { type ChangeEvent } from "react";

type Props = {
  seconds: number;

  onChange: (value: number) => void;
};

const STEP = 15;

const TimeCounter = ({ seconds, onChange }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber;

    onChange(isNaN(value) ? 0 : value);
  };

  return (
    <div className="flex items-center gap-6">
      <button
        className="h-10 w-10 rounded-full bg-gray-500"
        type="button"
        onClick={() => onChange(seconds - STEP)}
      >
        -
      </button>
      <input
        className="w-16 border-b border-solid border-b-gray-500 bg-transparent py-1 text-center outline-none"
        value={secondsToDate(seconds)}
        step={STEP}
        onChange={handleChange}
      />
      <button
        className="h-10 w-10 rounded-full bg-gray-500"
        type="button"
        onClick={() => onChange(seconds + STEP)}
      >
        +
      </button>
    </div>
  );
};

export default TimeCounter;
