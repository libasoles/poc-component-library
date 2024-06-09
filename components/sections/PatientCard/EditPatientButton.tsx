"use client";

import Button from "@/components/generic/Button";
import { useDialog } from "@/components/generic/popups/useDialog";
import EditIcon from "@/components/icons/EditIcon";
import { Patient } from "types/Patient";
import EditPatientDialog from "./EditPatientDialog";

type Props = {
  patient: Patient;
};

const EditPatientButton = ({ patient }: Props) => {
  const { isOpen, openDialog, closeDialog } = useDialog();

  return (
    <>
      <Button
        variant="text"
        color="neutral"
        icon={<EditIcon />}
        onClick={openDialog}
      >
        Edit
      </Button>

      <EditPatientDialog
        patient={patient}
        isOpen={isOpen}
        closeDialog={closeDialog}
      />
    </>
  );
};

export default EditPatientButton;
