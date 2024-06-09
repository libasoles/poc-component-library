import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  size?: number;
} & ComponentProps<"svg">;

const EditIcon = ({ size = 6, className }: Props) => (
  <svg
    className={twMerge(`w-${size} h-${size} `, className)}
    fill="currentColor"
    stroke="currentColor"
    focusable="false"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"></path>
  </svg>
);

export default EditIcon;
