import Message from "@/components/generic/Message";
import Dialog from "@/components/generic/popups/Dialog";
import { useToastMessages } from "@/components/generic/popups/ToastContext";
import { FormProvider } from "react-hook-form";
import { Patient } from "types/Patient";
import { usePatientForm } from "../NewPatient/usePatientForm";
import PatientForm from "../PatientForm";

const submitFormEvent = new Event("submit", {
  cancelable: true,
  bubbles: true,
});

type Props = {
  patient: Patient;
  closeDialog: () => void;
};

const EditPatientDialog = ({ patient, closeDialog }: Props) => {
  const { addMessage } = useToastMessages();

  const initialValues = {
    name: patient.name,
    website: patient.website,
    description: patient.description,
  };

  const { formRef, form, reset, handleSubmit, errorSubmitting } =
    usePatientForm({
      patientId: patient.id,
      initialValues,
      onSuccess: () => {
        closeDialog();
        addMessage("Patient updated successfully");
      },
      onError: () => {
        addMessage("Error updating the patient");
      },
    });

  const handleConfirm = () => {
    formRef.current?.dispatchEvent(submitFormEvent);
  };

  const handleClose = () => {
    reset();
    closeDialog();
  };

  return (
    <>
      <Dialog
        isOpen
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="Edit patient"
        fullscreen
      >
        <FormProvider {...form}>
          <PatientForm ref={formRef} handleSubmit={handleSubmit} />
        </FormProvider>

        {errorSubmitting && (
          <Message content="Error updating the patient" variant="error" />
        )}
      </Dialog>
    </>
  );
};

export default EditPatientDialog;
