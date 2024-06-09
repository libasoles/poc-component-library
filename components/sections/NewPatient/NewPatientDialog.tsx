import Dialog from "@/components/generic/popups/Dialog";
import { FormProvider } from "react-hook-form";
import Toast from "../PatientList/Toast";
import NewPatienForm from "./NewPatientForm";
import { usePatientForm } from "./usePatientForm";

const submitFormEvent = new Event("submit", {
  cancelable: true,
  bubbles: true,
});

type Props = {
  isOpen: boolean;
  closeModal: () => void;
};

const FormDialog = ({ isOpen, closeModal }: Props) => {
  const { formRef, form, reset, handleSubmit, errorSubmitting } =
    usePatientForm({
      onSuccess: closeModal,
    });

  const handleConfirm = () => {
    formRef.current?.dispatchEvent(submitFormEvent);
  };

  const handleClose = () => {
    reset();
    closeModal();
  };

  return (
    <>
      <Dialog
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="Create patient"
      >
        <FormProvider {...form}>
          <NewPatienForm ref={formRef} handleSubmit={handleSubmit} />
        </FormProvider>

        {errorSubmitting && (
          <Toast message="Error submitting form" variant="error" />
        )}
      </Dialog>
    </>
  );
};

export default FormDialog;
