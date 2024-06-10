"use client";

import ActionBar from "../ActionBar";
import Button from "../buttons/Button";
import Column from "../layout/Column";
import Modal, { ModalProps } from "./Modal";

type Props = {
  onConfirm: () => void;
} & ModalProps;

const Dialog = ({ onConfirm, children, ...props }: Props) => {
  return (
    <Modal {...props}>
      <Column className="justify-between h-full">
        {children}

        <ActionBar className="pb-0">
          <Button onClick={props.onClose} variant="text">
            Cancel
          </Button>
          <Button onClick={onConfirm} variant="text">
            Ok
          </Button>
        </ActionBar>
      </Column>
    </Modal>
  );
};

export default Dialog;
