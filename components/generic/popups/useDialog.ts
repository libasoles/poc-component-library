import { useModal } from "./useModal";

export const useDialog = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return { isOpen, openDialog: openModal, closeDialog: closeModal };
};
