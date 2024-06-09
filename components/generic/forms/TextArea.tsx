import { ComponentProps, forwardRef } from "react";
import Field from "./Field";

type Props = {
  label?: string;
  error?: string;
  name: string;
} & ComponentProps<"input">;

const TextArea = (props: Props, ref: Ref<HTMLTextAreaElement>) => {
  return (
    <Field {...props}>
      {(fieldProps) => <textarea {...fieldProps} ref={ref} />}
    </Field>
  );
};

export default forwardRef(TextArea);
