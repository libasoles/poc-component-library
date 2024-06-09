import { ComponentProps } from "react";

const Label = ({ children, ...props }: ComponentProps<"label">) => {
  return (
    <label className="block text-gray-400 text-sm mb-1" {...props}>
      {children}
    </label>
  );
};

export default Label;
