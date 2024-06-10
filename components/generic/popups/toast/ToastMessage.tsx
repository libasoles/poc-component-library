import Message from "@/components/generic/Message";
import { useEffect } from "react";
import { ToastMessage, useToastMessages } from "../ToastContext";

const height = 64;
const marginBottom = 16;

type ToastMessageProps = {
  toast: ToastMessage;
  index: number;
};

const Toast = ({ toast, index }: ToastMessageProps) => {
  const { removeMessage } = useToastMessages();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeMessage(toast.id);
    }, toast.timeToLive);

    return () => clearTimeout(timer);
  }, [toast, removeMessage]);

  const bottomPosition = index * height + marginBottom;

  return (
    <div
      className={`fixed right-4`}
      style={{
        bottom: bottomPosition + "px",
      }}
    >
      <Message content={toast.message} variant={toast.variant} />
    </div>
  );
};

export default Toast;
