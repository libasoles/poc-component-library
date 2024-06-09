type Props = {
  message: string;
  variant?: "error" | "info";
};

// TODO: time out and hide
const Toast = ({ message, variant }: Props) => {
  const color = variant === "error" ? "bg-red-900" : "bg-blue-900";

  return (
    <div className="fixed bottom-4 right-4">
      <div className={`${color} text-white p-4 rounded`}>{message}</div>
    </div>
  );
};

export default Toast;
