import Label from "@/components/generic/forms/Label";
import Column from "@/components/generic/layout/Column";
import Dialog from "@/components/generic/popups/Dialog";
import { useToastMessages } from "@/components/generic/popups/ToastContext";
import Text from "@/components/generic/Text";
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
          <Text>
            {
              "This action can't be undone. Are you sure you want to delete this patient?"
            }
          </Text>
          <Text className="mt-3">
            <Label className="mr-2">Name:</Label>
            {patient.name}
          </Text>
          <Text>
            <Label className="mr-2">ID:</Label>
            {patient.id}
          </Text>
        </Column>
      </Dialog>
    </>
  );
};

export default DeletePatientDialog;
