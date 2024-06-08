import Image from "next/image";
import { Patient } from "types/Patient";

const imageSize = 80;

type Props = {
  patient: Patient;
};

const Avatar = ({ patient }: Props) => {
  const { avatar, name } = patient;

  return (
    <Image
      className="rounded-full shadow-lg"
      src={avatar}
      alt={`Avatar for ${name}`}
      width={imageSize}
      height={imageSize}
    />
  );
};

export default Avatar;
