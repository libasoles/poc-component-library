import { twMerge } from "tailwind-merge";

export type Variant = "error" | "info";

type Props = {
  content: string;
  variant?: Variant;
} & React.ComponentPropsWithoutRef<"div">;

const Message = ({ content, variant, className }: Props) => {
  const color = variant === "error" ? "bg-red-900" : "bg-blue-900";

  return (
    <div className={twMerge(`rounded`, className)}>
      <div className={`${color} text-white p-4`}>{content}</div>
    </div>
  );
};

export default Message;
