"use client";

import ActionBar from "../ActionBar";
import Button from "../buttons/Button";
import Column from "../layout/Column";
import Modal, { ModalProps } from "./Modal";

type Props = {
  onConfirm: () => void;
  isConfirmDisabled?: boolean;
} & ModalProps;

const Dialog = ({
  onConfirm,
  isConfirmDisabled = false,
  children,
  ...props
}: Props) => {
  return (
    <Modal {...props}>
      <Column className="justify-between h-full">
        {children}

        <ActionBar className="pb-0">
          <Button onClick={props.onClose} variant="text">
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            variant="text"
            disabled={isConfirmDisabled}
          >
            Ok
          </Button>
        </ActionBar>
      </Column>
    </Modal>
  );
};

export default Dialog;
