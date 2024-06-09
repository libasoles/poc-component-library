import Dialog from "@/components/generic/popups/Dialog";
import { useDeletePatient } from "api/useDeletePatient";
import { Patient } from "types/Patient";
import Toast from "../PatientList/Toast";

type Props = {
  patient: Patient;
  isOpen: boolean;
  closeDialog: () => void;
};

const DeletePatientDialog = ({ patient, isOpen, closeDialog }: Props) => {
  const { mutate } = useDeletePatient({
    onSuccess: closeDialog, // TODO: toast
    onError: () => {}, // TODO
  });

  const handleSubmit = () => {
    mutate(patient.id);
  };

  const handleClose = () => {
    closeDialog();
  };

  const errorSubmitting = false;

  return (
    <>
      <Dialog
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleSubmit}
        title="Delete patient"
      >
        <div className="mt-16 mx-4">
          <p className="text-lg">
            {
              "This action can't be undone. Are you sure you want to delete this patient?"
            }
          </p>
        </div>

        {errorSubmitting && (
          <Toast message="Error deleting the patient" variant="error" />
        )}
      </Dialog>
    </>
  );
};

export default DeletePatientDialog;
