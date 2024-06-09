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
  fullscreen?: boolean;
  onClose: () => void;
} & ComponentProps<"div">;

const Modal = ({
  title,
  isOpen = false,
  onClose,
  fullscreen = false,
  className = "",
  children,
  ...props
}: ModalProps) => {
  if (typeof window === "undefined") return null;

  if (!isOpen) {
    return null;
  }

  const content = (
    <Column
      className={twMerge(
        `px-4 py-4 m-0
        min-h-40 min-w-96 
        bg-slate-800 text-neutral-200
        shadow-lg
        ${
          fullscreen
            ? "w-full h-full sm:h-fit"
            : "w-fit h-fit sm:h-fit sm:w-fit rounded-lg"
        }  
        transition-all
        b-0`,
        className
      )}
    >
      <Row>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <IconButton className="sm:hidden" onClick={onClose}>
          <CrossIcon className="text-gray-500" />
        </IconButton>
      </Row>

      {children}
    </Column>
  );

  const dialog = (
    <div
      className={`z-40 fixed 
      top-0 left-0 w-full h-full 
      bg-black bg-opacity-50 
      flex items-center justify-center
      `}
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
        className={`z-50 relative
          rounded-lg shadow-lg
          w-fit ${fullscreen ? "h-full mx-0" : "h-fit mx-4"} sm:h-fit
          transition-all
          bg-transparent
          b-0`}
      >
        {content}
      </dialog>
    </div>
  );

  return <>{createPortal(dialog, document.body)}</>;
};

export default Modal;
