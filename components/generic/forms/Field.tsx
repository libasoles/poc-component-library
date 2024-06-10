import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import Label from "./Label";

export type FieldProps = {
  id?: string;
  label?: string;
  error?: string;
  name: string;
  className?: string;
};

type ChildrenProps<T> = T & { className: string };

type CombinedProps<T> = {
  children: (props: ChildrenProps<T>) => ReactElement;
} & FieldProps &
  Omit<T, "children">;

const Field = <T extends {}>({
  label = "",
  error = "",
  className = "",
  children,
  ...props
}: CombinedProps<T>): ReactElement => {
  const border = error ? "border-red-500" : "border-gray-500";
  const focus =
    "focus:outline-none focus:shadow-outline focus:border-blue-400 focus:placeholder-transparent";

  const fieldClassName = twMerge(
    `shadow appearance-none rounded 
    border ${border} w-full  
    text-gray-300 caret-gray-300 bg-gray-900
    py-2 px-3 mb-1 
    ${focus}`,
    className
  );

  const field = children({
    ...props,
    className: fieldClassName,
  } as unknown as ChildrenProps<T>);

  const { id, name } = props;

  return (
    <div className="mt-1 mb-2">
      <Label htmlFor={id ? id : name} className="block text-sm">
        {label}
      </Label>

      {field}

      <p className="text-red-400 text-xs italic h-2">{error || ""}</p>
    </div>
  );
};

export default Field;
