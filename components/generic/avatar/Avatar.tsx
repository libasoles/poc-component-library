import Image from "next/image";
import { useState } from "react";
import { Patient } from "types/Patient";
import ErrorBoundary from "./AvatarErrorBoundary";

const imageSize = 50;

function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

type Props = {
  patient: Patient;
};

export const defaultAvatar = "/avatar.jpeg";

export const Avatar = ({ patient }: Props) => {
  const { avatar = defaultAvatar, name } = patient;

  const [src, setSrc] = useState(isValidUrl(avatar) ? avatar : defaultAvatar);

  return (
    <Image
      className="rounded-full shadow-lg"
      src={src}
      alt={`Avatar for ${name}`}
      width={imageSize}
      height={imageSize}
      blurDataURL={defaultAvatar}
      placeholder="blur"
      onError={() => setSrc(defaultAvatar)}
    />
  );
};

export default function AvatarWrapper(props: Props) {
  return (
    <ErrorBoundary>
      <Avatar {...props} />
    </ErrorBoundary>
  );
}
