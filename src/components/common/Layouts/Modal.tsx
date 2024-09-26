export type ModalProps = {
  position?: "center" | "bottom";
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

export default function Modal({
  position = "center",
  isOpen,
  closeModal,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modalWrap" onClick={closeModal}>
      <div
        className={position === "center" ? "modal" : "modalBottom"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
