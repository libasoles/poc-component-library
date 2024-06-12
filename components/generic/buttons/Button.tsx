import { ComponentPropsWithoutRef, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

type variant = "text" | "outlined";

type Props = {
  variant?: variant;
  icon?: ReactElement<
    ComponentPropsWithoutRef<"svg"> & { className?: string; size: number }
  >;
} & ComponentPropsWithoutRef<"button">;

const Button = ({
  children,
  className,
  variant = "outlined",
  color = "blue",
  icon,
  ...props
}: Props) => {
  const variantStyle =
    variant === "outlined"
      ? `border-2 border-${color}-500 hover:border-${color}-300 text-${color}-200 rounded-lg px-4 py-1`
      : `hover:bg-zinc-700 text-${color}-400 hover:text-${color}-300 rounded-sm px-2 py-1`;

  const disabled =
    "disabled:opacity-60 disabled:hover:bg-inherit disabled:hover:text-inherit focus:outline-none";

  return (
    <button
      className={twMerge(
        `flex uppercase justify-center items-center gap-2 text-sm ${variantStyle} ${disabled}`,
        className
      )}
      {...props}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
