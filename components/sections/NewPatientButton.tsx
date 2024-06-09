"use client";

import Button from "@/components/generic/Button";
import Dialog from "../generic/popups/Dialog";
import { useModal } from "../generic/popups/useModal";
import NewPatienForm from "./NewPatient/NewPatientForm";

const NewPatientButton = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Button className="self-end" onClick={openModal}>
        Add patient
      </Button>
      <Dialog isOpen={isOpen} onClose={closeModal} title="Create patient">
        <NewPatienForm />
      </Dialog>
    </>
  );
};

export default NewPatientButton;
