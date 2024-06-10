import { ComponentProps, forwardRef, Ref } from "react";
import { twMerge } from "tailwind-merge";
import Field, { FieldProps } from "./Field";

type TextAreaProps = FieldProps & ComponentProps<"textarea">;

const TextArea = (props: TextAreaProps, ref: Ref<HTMLTextAreaElement>) => {
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

export default forwardRef<HTMLTextAreaElement, TextAreaProps>(TextArea);
