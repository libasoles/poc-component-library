import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import Field from "./Field";

type Props = {
  label?: string;
  error?: string;
  name: string;
} & ComponentProps<"input">;

const TextArea = (props: Props, ref: Ref<HTMLTextAreaElement>) => {
  return (
    <Field {...props}>
      {({ className, ...fieldProps }) => (
        <textarea
          {...fieldProps}
          className={twMerge("min-h-36", className || "")}
          ref={ref}
        />
      )}
    </Field>
  );
};

export default forwardRef(TextArea);
