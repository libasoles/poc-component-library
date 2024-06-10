"use client";

import Button from "@/components/generic/buttons/Button";
import { useDialog } from "@/components/generic/popups/useDialog";
import { DeleteIcon } from "@/components/icons";
import { Patient } from "types/Patient";
import DeletePatientDialog from "./DeletePatientDialog";

type Props = {
  patient: Patient;
};

const DeletePatientButton = ({ patient }: Props) => {
  const { isOpen, openDialog, closeDialog } = useDialog();

  return (
    <>
      <Button
        variant="text"
        color="neutral"
        icon={<DeleteIcon />}
        onClick={openDialog}
      >
        Delete
      </Button>

      <DeletePatientDialog
        patient={patient}
        isOpen={isOpen}
        closeDialog={closeDialog}
      />
    </>
  );
};

export default DeletePatientButton;
