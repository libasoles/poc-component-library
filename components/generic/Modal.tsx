"use client";

import { ComponentProps } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import Column from "./Column";
import IconButton, { CrossIcon } from "./IconButton";
import Row from "./Row";

type Props = {
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
}: Props) => {
  if (!isOpen) return <></>;

  return createPortal(
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
      {...props}
    >
      <Column
        className={twMerge(
          `justify-between bg-slate-800 px-6 py-4 rounded-lg shadow-lg z-50 min-h-40 min-w-96 relative`,
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
