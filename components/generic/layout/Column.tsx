import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const Column = ({ children, className, ...props }: ComponentProps<"div">) => {
  return (
    <div {...props} className={twMerge(`flex flex-col`, className)}>
      {children}
    </div>
  );
};

export default Column;
