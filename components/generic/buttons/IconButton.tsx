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

export default IconButton;
