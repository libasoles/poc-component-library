import dayjs from "dayjs";
import { useState } from "react";
import { Patient } from "types/Patient";
import Avatar from "../generic/Avatar";
import Button from "../generic/Button";
import Column from "../generic/Column";
import Row from "../generic/Row";
import { DeleteIcon } from "../icons";

type Props = {
  patient: Patient;
};

const dateFormat = "MMMM D, YYYY";

const PatientCard = ({ patient }: Props) => {
  const [showMore, setShowMore] = useState(false);

  const startDate = dayjs(patient.createdAt).format(dateFormat);

  return (
    <li className="mt-6 p-4 bg-zinc-900 rounded-lg shadow-lg">
      <Column>
        <Row className="justify-between items-start">
          <Row className="gap-4 items-center">
            <Avatar patient={patient} />

            <div>
              <h3 className="font-bold text-xl mb-1">{patient.name}</h3>
              <p>
                <span className="text-gray-400">Registration date:</span>{" "}
                {startDate}
              </p>
            </div>
          </Row>

          <Row className="justify-end gap-2">
            <Button variant="text">Edit</Button>
            <Button variant="text" color="red" icon={<DeleteIcon />}>
              Delete
            </Button>
          </Row>
        </Row>
        <p
          className={`text-gray-300 text-base mt-4 ${
            showMore ? "" : "truncate"
          }`}
        >
          {patient.description}
        </p>
      </Column>

      {showMore && (
        <div className="mt-4">
          <a href="patient.website" target="_blank">
            {patient.website}
          </a>
        </div>
      )}

      <Row className="justify-end gap-2">
        <Button
          variant="text"
          className="mt-4 lowercase"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "show less" : "...see more"}
        </Button>
      </Row>
    </li>
  );
};

export default PatientCard;
