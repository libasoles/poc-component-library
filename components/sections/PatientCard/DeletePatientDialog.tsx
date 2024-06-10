import Column from "@/components/generic/layout/Column";
import Dialog from "@/components/generic/popups/Dialog";
import { useToastMessages } from "@/components/generic/popups/ToastContext";
import { useDeletePatient } from "api/useDeletePatient";
import { Patient } from "types/Patient";

type Props = {
  patient: Patient;
  closeDialog: () => void;
};

const DeletePatientDialog = ({ patient, closeDialog }: Props) => {
  const { addMessage, addErrorMessage } = useToastMessages();

  const { mutate } = useDeletePatient({
    onSuccess: () => {
      closeDialog();
      addMessage("Patient deleted successfully");
    },
    onError: () => {
      addErrorMessage("Error deleting the patient");
    },
  });

  const handleSubmit = () => {
    mutate(patient.id);
  };

  const handleClose = () => {
    closeDialog();
  };

  return (
    <>
      <Dialog
        isOpen
        onClose={handleClose}
        onConfirm={handleSubmit}
        title="Delete patient"
      >
        <Column className="my-8 h-full justify-center">
          <p className="text-md">
            {
              "This action can't be undone. Are you sure you want to delete this patient?"
            }
          </p>
          <p className="text-md mt-3 text-gray-300">
            <span className=" text-gray-400 mr-2">Name:</span>
            {patient.name}
          </p>
          <p className="text-md text-gray-300">
            <span className=" text-gray-400 mr-2">ID:</span>
            {patient.id}
          </p>
        </Column>
      </Dialog>
    </>
  );
};

export default DeletePatientDialog;
