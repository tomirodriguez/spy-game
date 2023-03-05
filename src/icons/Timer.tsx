type Props = {
  size?: number;
};

const Timer = ({ size = 24 }: Props) => {
  return (
    <svg
      className="fill-slate-400"
      height={size}
      width={size}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <g>
            <path d="M401.545,132.966l18.057-22.571l-20.002-16l-18.005,22.502c-32.222-22.844-70.895-37.009-112.794-39.45V25.6h38.4 c7.074,0,12.8-5.726,12.8-12.8C320,5.726,314.274,0,307.2,0H204.8C197.726,0,192,5.726,192,12.8c0,7.074,5.726,12.8,12.8,12.8 h38.4v51.849c-41.899,2.441-80.572,16.614-112.794,39.458l-18.005-22.502l-20.002,16l18.057,22.571 C66.313,172.792,38.4,230.263,38.4,294.4C38.4,414.575,135.825,512,256,512s217.6-97.425,217.6-217.6 C473.6,230.263,445.688,172.792,401.545,132.966z M256,486.4c-105.865,0-192-86.135-192-192s86.135-192,192-192 s192,86.135,192,192S361.865,486.4,256,486.4z"></path>
          </g>
        </g>
        <g>
          <g>
            <path d="M268.8,258.347V128h-25.6v130.347c-14.882,5.291-25.6,19.354-25.6,36.053c0,21.205,17.195,38.4,38.4,38.4 c21.205,0,38.4-17.195,38.4-38.4C294.4,277.709,283.682,263.637,268.8,258.347z M256,307.2c-7.057,0-12.8-5.743-12.8-12.8 s5.743-12.8,12.8-12.8c7.057,0,12.8,5.743,12.8,12.8S263.057,307.2,256,307.2z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Timer;
