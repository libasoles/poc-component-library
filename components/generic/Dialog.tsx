"use client";

import { ComponentProps } from "react";
import Button from "./Button";
import Column from "./Column";
import Modal from "./Modal";
import Row from "./Row";

type Props = {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
} & ComponentProps<"div">;

const Dialog = ({ children, ...props }: Props) => {
  return (
    <Modal className="" {...props}>
      <Column className="justify-between h-full">
        {children}

        <Row className="justify-end gap-2">
          <Button onClick={props.onClose} variant="text">
            Cancel
          </Button>
          <Button onClick={props.onClose} variant="text">
            Ok
          </Button>
        </Row>
      </Column>
    </Modal>
  );
};

export default Dialog;
