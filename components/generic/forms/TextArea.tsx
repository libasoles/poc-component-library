import { ComponentProps } from "react";
import Field from "./Field";

type Props = {
  label?: string;
  error?: string;
  name: string;
} & ComponentProps<"input">;

const TextArea = (props: Props) => {
  return (
    <Field {...props}>{(inputProps) => <textarea {...inputProps} />}</Field>
  );
};

export default TextArea;
