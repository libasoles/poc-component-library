"use client";

import { useToastMessages } from "./ToastContext";
import Toast from "./ToastMessage";

const ToastRenderer = () => {
  const { messages } = useToastMessages();

  return (
    <div>
      {messages.map((toast, i) => (
        <Toast key={toast.id} index={i} toast={toast} />
      ))}
    </div>
  );
};

export default ToastRenderer;
