import { type ChangeEvent } from "react";

type Props = {
  amount: number;

  onChange: (value: number) => void;
};

const Counter = ({ amount, onChange }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber;

    onChange(isNaN(value) ? 0 : value);
  };

  return (
    <div className="flex items-center gap-6">
      <button
        className="h-10 w-10 rounded-full bg-gray-500"
        type="button"
        onClick={() => onChange(amount - 1)}
      >
        -
      </button>
      <input
        className="w-16 border-b border-solid border-b-gray-500 bg-transparent py-1 text-center outline-none"
        type="number"
        value={amount === 0 ? "" : amount}
        onChange={handleChange}
      />
      <button
        className="h-10 w-10 rounded-full bg-gray-500"
        type="button"
        onClick={() => onChange(amount + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
