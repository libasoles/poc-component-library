import { ComponentProps, forwardRef, Ref } from "react";
import Field from "./Field";

type Props = {
  label?: string;
  error?: string;
  name: string;
} & ComponentProps<"input">;

const TextField = (props: Props, ref: Ref<HTMLInputElement>) => {
  return (
    <Field {...props}>
      {(fieldProps) => <input ref={ref} {...fieldProps} />}
    </Field>
  );
};

export default forwardRef(TextField);
