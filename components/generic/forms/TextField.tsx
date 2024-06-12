import { ComponentPropsWithRef, forwardRef, Ref } from "react";
import Field, { FieldProps } from "./Field";

type TextFieldProps = FieldProps & ComponentPropsWithRef<"input">;

const TextField = (props: TextFieldProps, ref: Ref<HTMLInputElement>) => {
  return (
    <Field {...props}>
      {(fieldProps) => <input ref={ref} {...fieldProps} />}
    </Field>
  );
};

export default forwardRef<HTMLInputElement, TextFieldProps>(TextField);
