"use client";

import Button from "@/components/generic/buttons/Button";
import { useDialog } from "@/components/generic/popups/useDialog";
import NewPatientDialog from "./NewPatientDialog";

const NewPatientButton = () => {
  const { isOpen, openDialog, closeDialog } = useDialog();

  return (
    <>
      <Button className="self-end" onClick={openDialog}>
        Add patient
      </Button>

      {isOpen && <NewPatientDialog closeDialog={closeDialog} />}
    </>
  );
};

export default NewPatientButton;
