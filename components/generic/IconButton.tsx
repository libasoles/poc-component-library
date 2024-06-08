import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const IconButton = ({
  children,
  className,
  onClick: handleClick,
  ...props
}: ComponentProps<"button">) => {
  return (
    <button
      onClick={handleClick}
      {...props}
      className={twMerge(
        "hover:bg-slate-700 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50",
        className
      )}
    >
      {children}
    </button>
  );
};

export const CrossIcon = () => (
  <svg
    className="w-6 h-6 text-slate-300 hover:text-slate-100"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default IconButton;
