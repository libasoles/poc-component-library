import Message from "@/components/generic/Message";
import Dialog from "@/components/generic/popups/Dialog";
import { useToastMessages } from "@/components/generic/popups/toast/ToastContext";
import { FormProvider } from "react-hook-form";
import PatientForm from "../PatientForm";
import { usePatientForm } from "./usePatientForm";

const submitFormEvent = new Event("submit", {
  cancelable: true,
  bubbles: true,
});

type Props = {
  closeDialog: () => void;
};

const NewPatientDialog = ({ closeDialog }: Props) => {
  const { addMessage } = useToastMessages();

  const { formRef, form, reset, handleSubmit, errorSubmitting } =
    usePatientForm({
      onSuccess: () => {
        closeDialog();
        addMessage("Patient created successfully");
      },
    });

  const handleConfirm = () => {
    formRef.current?.dispatchEvent(submitFormEvent);
  };

  const handleClose = () => {
    reset();
    closeDialog();
  };

  const isConfirmDisabled = !form.formState.isValid;

  return (
    <>
      <Dialog
        isOpen
        onClose={handleClose}
        onConfirm={handleConfirm}
        isConfirmDisabled={isConfirmDisabled}
        title="Create patient"
        fullscreen
      >
        <FormProvider {...form}>
          <PatientForm ref={formRef} handleSubmit={handleSubmit} />
        </FormProvider>

        {errorSubmitting && (
          <Message content="Error creating the patient" variant="error" />
        )}
      </Dialog>
    </>
  );
};

export default NewPatientDialog;
