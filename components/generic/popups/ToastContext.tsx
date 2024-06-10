import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Variant } from "../Message";

const timeToLive = 3000;

export type ToastMessage = {
  id: string;
  message: string;
  variant?: Variant;
  timeToLive?: number;
};

type ContextValue = {
  messages: ToastMessage[];
  addMessage: (toast: string, variant?: Variant) => void;
  addErrorMessage: (toast: string) => void;
  removeMessage: (id: ToastMessage["id"]) => void;
};

const ToastContext = createContext<ContextValue | null>(null);

function createToastMessage(message: string, variant: Variant = "info") {
  const randomId = Math.random().toString(36).slice(1, 9);

  return {
    id: randomId,
    message,
    variant,
    timeToLive,
  };
}

export const useToastMessages = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(
      "useToastMessages must be used within a ToastMessagesProvider"
    );
  }

  return context;
};

export const ToastMessagesProvider = ({ children }: PropsWithChildren) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addMessage = (message: string, variant?: Variant) => {
    const newToast = createToastMessage(message, variant);

    setMessages((prevToasts) => [...prevToasts, newToast]);
  };

  const addErrorMessage = (message: string) => {
    addMessage(message, "error");
  };

  const removeMessage = (id: ToastMessage["id"]) => {
    setMessages((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider
      value={{ messages, addMessage, addErrorMessage, removeMessage }}
    >
      {children}
    </ToastContext.Provider>
  );
};
