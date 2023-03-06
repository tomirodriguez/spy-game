import Modal from "@/components/Modal";

type Props = {
  onClose: () => void;
  onReset: () => void;
};

const ResetModal = ({ onClose, onReset }: Props) => {
  return (
    <Modal title="Reiniciar" onClose={onClose}>
      <p className="text-center">
        Siempre hay un@ pelotud@ entre los participantes. Estás seguro que
        querés reiniciar la ronda ?
      </p>
      <div className="mt-8 flex gap-4">
        <button className="button-cancel grow text-sm" onClick={onClose}>
          Cancelar
        </button>
        <button className="button grow text-sm" onClick={onReset}>
          Aceptar
        </button>
      </div>
    </Modal>
  );
};

export default ResetModal;
