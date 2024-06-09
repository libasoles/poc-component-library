import dayjs from "dayjs";
import { useState } from "react";
import { Patient } from "types/Patient";
import Avatar from "../generic/Avatar";
import Button from "../generic/Button";
import Column from "../generic/layout/Column";
import Row from "../generic/layout/Row";
import { DeleteIcon } from "../icons";

type Props = {
  patient: Patient;
};

const dateFormat = "MMMM D, YYYY";

const PatientCard = ({ patient }: Props) => {
  const [showMore, setShowMore] = useState(false);

  const startDate = dayjs(patient.createdAt).format(dateFormat);

  return (
    <li className="bg-gray-800 rounded-lg shadow-lg mb-2">
      <Column className="mb-2 p-4">
        <Column>
          <Row className="justify-start items-center gap-4">
            <Avatar patient={patient} />

            <Column>
              <h3 className="font-bold text-xl mb-1">{patient.name}</h3>
              <Row className="gap-2">
                <span className="text-neutral-400">Registration date:</span>
                <span className="text-neutral-200">{startDate}</span>
              </Row>
            </Column>
          </Row>

          <Row className="justify-end gap-2">
            <p
              className={`text-gray-300 text-base mt-4 ${
                showMore ? "" : "truncate"
              }`}
            >
              {patient.description}
            </p>
            {!showMore && (
              <Button
                variant="text"
                color="neutral"
                className="mt-4 lowercase w-fit flex-none hover:bg-transparent hover:text-blue-300 hover:underline underline-offset-2"
                onClick={() => setShowMore((prev) => !prev)}
              >
                ...see more
              </Button>
            )}
          </Row>
        </Column>

        {showMore && (
          <div className="mt-4">
            <a href="patient.website" target="_blank">
              {patient.website}
            </a>
          </div>
        )}
      </Column>

      <Row className="justify-end gap-2 p-2">
        <Button variant="text">Edit</Button>
        <Button variant="text" color="red" icon={<DeleteIcon />}>
          Delete
        </Button>
      </Row>
    </li>
  );
};

export default PatientCard;
