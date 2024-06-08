import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type variant = "text" | "outlined";

type Props = {
  variant?: variant;
} & ComponentProps<"button">;

const Button = ({
  children,
  className,
  variant = "outlined",
  ...props
}: Props) => {
  const border =
    variant === "outlined"
      ? "border-2 border-blue-500 hover:border-blue-300 rounded-lg px-4 py-1"
      : "hover:bg-zinc-700 rounded-sm px-2 py-1";

  return (
    <button
      className={twMerge(`uppercase  text-blue-200 ${border}`, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
