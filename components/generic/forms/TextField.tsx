import { ComponentProps } from "react";
import Field from "./Field";

type Props = {
  label?: string;
  error?: string;
  name: string;
} & ComponentProps<"input">;

const TextField = (props: Props) => {
  return <Field {...props}>{(inputProps) => <input {...inputProps} />}</Field>;
};

export default TextField;
