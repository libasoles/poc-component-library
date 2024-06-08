import dayjs from "dayjs";
import Image from "next/image";
import { useState } from "react";
import { Patient } from "types/Patient";

type Props = {
  patient: Patient;
};

const imageSize = 128;

const dateFormat = "MMMM D, YYYY";

const PatientCard = ({ patient }: Props) => {
  const [showMore, setShowMore] = useState(false);

  const startDate = dayjs(patient.createdAt).format(dateFormat);

  return (
    <li key={patient.id} className="mt-6 p-4 bg-zinc-800 rounded-lg shadow-lg">
      <div className="flex flex-col">
        <div className="flex flex-row gap-4 items-center">
          <Image
            className="rounded-full shadow-lg"
            src={patient.avatar}
            alt={`Avatar for ${patient.name}`}
            width={imageSize}
            height={imageSize}
          />
          <div>
            <h3 className="font-bold text-xl mb-1">{patient.name}</h3>
            <p>
              <span className="text-gray-400">Registration date:</span>{" "}
              {startDate}
            </p>
          </div>
        </div>
        <p
          className={`text-gray-300 text-base mt-4 ${
            showMore ? "" : "truncate"
          }`}
        >
          {patient.description}
        </p>
      </div>

      {showMore && (
        <div className="mt-4">
          <a href="patient.website" target="_blank">
            {patient.website}
          </a>
        </div>
      )}

      <button className="mt-4" onClick={() => setShowMore((prev) => !prev)}>
        {showMore ? "Show less" : "Show more"}
      </button>
    </li>
  );
};

export default PatientCard;
