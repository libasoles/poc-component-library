import { PropsWithChildren } from "react";

const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg mb-2">{children}</div>
  );
};

export default Card;
