import Close from "@/icons/Close";
import { type PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
  onClose: () => void;
}>;

const Modal = ({ onClose, children, title }: Props) => {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center text-white">
      <div className="absolute h-full w-full bg-black bg-opacity-60" />
      <article className="absolute w-5/6 max-w-lg grow rounded-lg bg-gray-900 px-6 py-5 shadow-xl shadow-black">
        <div
          className="absolute right-3 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white bg-opacity-5"
          onClick={onClose}
        >
          <Close size={12} />
        </div>
        <header>
          <h3 className="mb-6 text-center text-xl text-white">{title}</h3>
        </header>
        <div className="flex flex-col">{children}</div>
      </article>
    </div>
  );
};

export default Modal;
