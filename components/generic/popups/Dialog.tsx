"use client";

import Button from "../Button";
import Column from "../layout/Column";
import Row from "../layout/Row";
import Modal, { ModalProps } from "./Modal";

type Props = {
  onConfirm: () => void;
} & ModalProps;

const Dialog = ({ onConfirm, children, ...props }: Props) => {
  return (
    <Modal {...props}>
      <Column className="justify-between h-full">
        {children}

        <Row className="justify-end gap-2">
          <Button onClick={props.onClose} variant="text">
            Cancel
          </Button>
          <Button onClick={onConfirm} variant="text">
            Ok
          </Button>
        </Row>
      </Column>
    </Modal>
  );
};

export default Dialog;
