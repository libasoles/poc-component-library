import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const Text = ({ children, className, ...props }: ComponentProps<"p">) => {
  return (
    <p className={twMerge(`text-md text-gray-300`, className)} {...props}>
      {children}
    </p>
  );
};

export default Text;
