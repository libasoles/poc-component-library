import { ComponentProps } from "react";

const Card = ({ children, ...props }: ComponentProps<"div">) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg mb-2" {...props}>
      {children}
    </div>
  );
};

export default Card;
