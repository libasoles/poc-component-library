import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import Row from "./layout/Row";

const ActionBar = ({
  className,
  children,
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <Row
      className={twMerge(
        `justify-end gap-2 p-2 border-t border-gray-700`,
        className
      )}
    >
      {children}
    </Row>
  );
};

export default ActionBar;
