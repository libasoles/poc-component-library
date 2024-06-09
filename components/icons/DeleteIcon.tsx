import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  size?: number;
} & ComponentProps<"svg">;

const DeleteIcon = ({ size = 6, className }: Props) => (
  <svg
    className={twMerge(`w-${size} h-${size}`, className)}
    fill="currentColor"
    stroke="currentColor"
    focusable="false"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"></path>
  </svg>
);

export default DeleteIcon;
