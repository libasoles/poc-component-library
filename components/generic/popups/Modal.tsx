"use client";

import { ComponentProps, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import { CrossIcon } from "../../icons";
import IconButton from "../IconButton";
import Column from "../layout/Column";
import Row from "../layout/Row";

export type ModalProps = {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
} & ComponentProps<"div">;

const Modal = ({
  title,
  isOpen = false,
  onClose,
  className = "",
  children,
  ...props
}: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) {
    return null;
  }

  return createPortal(
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-40"
      {...props}
    >
      <Column
        className={twMerge(
          `justify-between bg-slate-800 px-6 py-4 rounded-lg shadow-lg min-h-40 min-w-96 h-fit w-fit relative z-50`,
          className
        )}
      >
        <Row>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <IconButton onClick={onClose}>
            <CrossIcon />
          </IconButton>
        </Row>

        {children}
      </Column>
    </div>,
    document.body
  );
};

export default Modal;
