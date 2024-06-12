import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

const Row = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      {...props}
      className={twMerge(
        `flex flex-row items-center justify-between`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Row;
