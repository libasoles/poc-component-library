"use client";

import Toast from "./toast/ToastMessage";
import { useToastMessages } from "./ToastContext";

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
