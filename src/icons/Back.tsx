type Props = {
  size?: number;
};

const Back = ({ size = 24 }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="fill-none stroke-gray-500"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke-width="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
      <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />{" "}
    </svg>
  );
};

export default Back;
