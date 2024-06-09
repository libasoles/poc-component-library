"use client";

import { ComponentProps } from "react";
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
  if (typeof window === "undefined") return null;

  if (!isOpen) {
    return null;
  }

  const content = (
    <Column>
      <Row>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <IconButton className="sm-hidden" onClick={onClose}>
          <CrossIcon />
        </IconButton>
      </Row>

      {children}
    </Column>
  );

  const overlay = (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-40"
      onClick={(event) => {
        console.log(event, event.target, event.currentTarget);
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      {...props}
    >
      <dialog
        open
        className={twMerge(
          `z-50 relative
          px-6 py-4 m-0
          min-h-40 min-w-96 
          justify-between 
          bg-slate-800 text-neutral-200
          rounded-lg shadow-lg
          w-full h-full sm:h-fit sm:w-fit 
          transition-all
          b-0`,
          className
        )}
      >
        {content}
      </dialog>
    </div>
  );

  return <>{createPortal(overlay, document.body)}</>;
};

export default Modal;
