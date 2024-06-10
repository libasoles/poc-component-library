import { ComponentProps, forwardRef, Ref } from "react";
import Field, { FieldProps } from "./Field";

type TextFieldProps = FieldProps & ComponentProps<"input">;

const TextField = (props: TextFieldProps, ref: Ref<HTMLInputElement>) => {
  return (
    <Field {...props}>
      {(fieldProps) => <input ref={ref} {...fieldProps} />}
    </Field>
  );
};

export default forwardRef<HTMLInputElement, TextFieldProps>(TextField);
