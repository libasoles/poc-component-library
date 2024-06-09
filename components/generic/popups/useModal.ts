import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
};

export const useDialog = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return { isOpen, openDialog: openModal, closeDialog: closeModal };
};
