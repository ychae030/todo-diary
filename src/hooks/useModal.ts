import { useState } from "react";
const useModal = (initialValue: boolean = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  return { isOpen, openModal, closeModal };
};

export default useModal;
