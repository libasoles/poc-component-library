import Image from "next/image";
import { useState } from "react";
import { Patient } from "types/Patient";

type Props = {
  patient: Patient;
};

const imageSize = 128;

const PatientCard = ({ patient }: Props) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <li key={patient.id}>
      <h3>{patient.name}</h3>
      <Image
        src={patient.avatar}
        alt={`Avatar for ${patient.name}`}
        width={imageSize}
        height={imageSize}
      />

      {showMore && (
        <div>
          <p>{patient.description}</p>
          <p>{patient.website}</p>
        </div>
      )}

      <button onClick={() => setShowMore((prev) => !prev)}>
        {showMore ? "Show less" : "Show more"}
      </button>
    </li>
  );
};

export default PatientCard;
