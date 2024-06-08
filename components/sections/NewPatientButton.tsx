"use client";

import Button from "@/components/generic/Button";
import { useState } from "react";
import Dialog from "../generic/Dialog";

const NewPatientButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button className="self-end" onClick={() => setIsOpen(true)}>
        Add patient
      </Button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Create patient"
      >
        ...
      </Dialog>
    </>
  );
};

export default NewPatientButton;
