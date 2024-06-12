import { ComponentPropsWithoutRef } from "react";

const Card = ({ children, ...props }: ComponentPropsWithoutRef<"article">) => {
  return (
    <article className="bg-gray-800 rounded-lg shadow-lg mb-2" {...props}>
      {children}
    </article>
  );
};

export default Card;
