import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

const Label = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"label">) => {
  return (
    <label className={twMerge(`text-gray-400 mb-1`, className)} {...props}>
      {children}
    </label>
  );
};

export default Label;
