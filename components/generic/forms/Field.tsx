import { ComponentProps, ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import Label from "./Label";

type Props = {
  label?: string;
  error?: string;
  name: string;
  children: (props: ComponentProps<"input" | "textarea">) => ReactElement;
} & Omit<ComponentProps<"input">, "children">;

const Field = ({
  id,
  name,
  label = "",
  error = "",
  className = "",
  children,
  ...props
}: Props): ReactElement => {
  const border = error ? "border-red-500" : "border-gray-500";
  const focus =
    "focus:outline-none focus:shadow-outline focus:border-blue-400 focus:placeholder-transparent";

  const fieldClassName = twMerge(
    `shadow appearance-none border ${border} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight ${focus}`,
    className
  );

  return (
    <div className="mb-6">
      <Label htmlFor={id ? id : name}>{label}</Label>
      {children({ ...props, className: fieldClassName })}
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default Field;
