import { ComponentProps } from "react";

const Label = ({ children, ...props }: ComponentProps<"label">) => {
  return (
    <label className="block text-gray-700 text-sm font-bold mb-2" {...props}>
      {children}
    </label>
  );
};

export default Label;
