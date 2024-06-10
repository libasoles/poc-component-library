import ActionBar from "@/components/generic/ActionBar";
import Avatar from "@/components/generic/avatar/Avatar";
import Button from "@/components/generic/buttons/Button";
import Label from "@/components/generic/forms/Label";
import Card from "@/components/generic/layout/Card";
import Column from "@/components/generic/layout/Column";
import Row from "@/components/generic/layout/Row";
import config from "api/config";
import { useState } from "react";
import { Patient } from "types/Patient";
import DeletePatientButton from "./DeletePatientButton";
import EditPatientButton from "./EditPatientButton";

type Props = {
  patient: Patient;
};

const PatientCard = ({ patient }: Props) => {
  const shouldHaveShowMoreFeature =
    patient.description.length > 100 || patient.website.length > 0;

  const [showMore, setShowMore] = useState(false);

  const startDate = patient.createdAt.format(config.dates.longDateFormat);

  return (
    <Card>
      <Column className="mb-2 p-4">
        <Column>
          <Row className="justify-start items-center gap-4">
            <Avatar patient={patient} />

            <Column>
              <h3 className="font-bold text-xl mb-1">{patient.name}</h3>
              <Row className="gap-2">
                <Label>Registration date:</Label>
                <span className="text-neutral-300">{startDate}</span>
              </Row>
            </Column>
          </Row>

          <Row className="justify-between gap-2">
            <p
              className={`text-neutral-300 text-base mt-4 ${
                showMore ? "" : "truncate"
              }`}
            >
              {patient.description}
            </p>
            {shouldHaveShowMoreFeature && !showMore && (
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

      <ActionBar>
        <EditPatientButton patient={patient} />
        <DeletePatientButton patient={patient} />
      </ActionBar>
    </Card>
  );
};

export default PatientCard;
