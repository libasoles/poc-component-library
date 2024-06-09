import Dialog from "@/components/generic/popups/Dialog";
import { FormProvider } from "react-hook-form";
import { Patient } from "types/Patient";
import NewPatienForm from "../NewPatient/NewPatientForm";
import { usePatientForm } from "../NewPatient/usePatientForm";
import Toast from "../PatientList/Toast";

const submitFormEvent = new Event("submit", {
  cancelable: true,
  bubbles: true,
});

type Props = {
  patient: Patient;
  isOpen: boolean;
  closeDialog: () => void;
};

const EditPatientDialog = ({ patient, isOpen, closeDialog }: Props) => {
  const initialValues = {
    name: patient.name,
    website: patient.website,
    description: patient.description,
  };

  const { formRef, form, reset, handleSubmit, errorSubmitting } =
    usePatientForm({
      patientId: patient.id,
      initialValues,
      onSuccess: closeDialog,
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
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="Edit patient"
        fullscreen
      >
        <FormProvider {...form}>
          <NewPatienForm ref={formRef} handleSubmit={handleSubmit} />
        </FormProvider>

        {errorSubmitting && (
          <Toast message="Error updating the patient" variant="error" />
        )}
      </Dialog>
    </>
  );
};

export default EditPatientDialog;
