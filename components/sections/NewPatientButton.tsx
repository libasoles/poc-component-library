"use client";

import Button from "@/components/generic/Button";
import { useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Dialog from "../generic/popups/Dialog";
import { useModal } from "../generic/popups/useModal";
import NewPatienForm from "./NewPatient/NewPatientForm";

type FormValues = {
  name: string;
  website: string;
  description: string;
};

const submitFormEvent = new Event("submit", {
  cancelable: true,
  bubbles: true,
});

const usePatientForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<FormValues>();

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data);
    // form.reset()
  });

  return { formRef, form, handleSubmit };
};

const FormDialog = ({ isOpen, closeModal }) => {
  const { formRef, form, handleSubmit } = usePatientForm();

  const handleConfirm = () => {
    formRef.current?.dispatchEvent(submitFormEvent);
  };

  return (
    <>
      <Dialog
        isOpen={true} // TMP
        onClose={closeModal}
        onConfirm={handleConfirm}
        title="Create patient"
      >
        <FormProvider {...form}>
          <NewPatienForm ref={formRef} handleSubmit={handleSubmit} />
        </FormProvider>
      </Dialog>
    </>
  );
};

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
