"use client";

import Button from "@/components/generic/Button";
import { useModal } from "@/components/generic/popups/useModal";
import FormDialog from "./NewPatientDialog";

const NewPatientButton = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Button className="self-end" onClick={openModal}>
        Add patient
      </Button>

      <FormDialog isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default NewPatientButton;
