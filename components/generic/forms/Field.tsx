import { ComponentProps, forwardRef, ReactElement, Ref } from "react";
import { twMerge } from "tailwind-merge";
import Label from "./Label";

type Props = {
  label?: string;
  error?: string;
  name: string;
  children: (
    props: ComponentProps<"input"> | ComponentProps<"textarea">,
    ref: Ref<HTMLElement>
  ) => ReactElement;
} & Omit<ComponentProps<"input">, "children">;

const Field = (
  { label = "", error = "", className = "", children, ...props }: Props,
  ref: Ref<HTMLElement>
): ReactElement => {
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

  const field = children({ ...props, className: fieldClassName }, ref);

  const { id, name } = props;

  return (
    <div className="mt-1 mb-2">
      <Label htmlFor={id ? id : name}>{label}</Label>

      {field}

      <p className="text-red-400 text-xs italic h-2">{error || ""}</p>
    </div>
  );
};

export default forwardRef(Field);
