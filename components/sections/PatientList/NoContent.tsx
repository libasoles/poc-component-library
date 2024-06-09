import Column from "@/components/generic/layout/Column";

type Props = {
  message: string;
};

const NoContent = ({ message }: Props) => (
  <Column className="justify-center items-center min-h-40 ">
    <p className="bg-blue-900 p-4 rounded">{message}</p>
  </Column>
);

export default NoContent;
