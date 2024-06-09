import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  size?: number;
} & ComponentProps<"svg">;

const CrossIcon = ({ size = 6, className }: Props) => (
  <svg
    className={twMerge(`w-${size} h-${size}`, className)}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default CrossIcon;
