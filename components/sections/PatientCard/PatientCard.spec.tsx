import { render, screen } from "@testing-library/react";
import Providers from "app/providers";
import {
  aPatientWithLongDescription,
  aPatientWithoutDescription,
  aPatientWithShortDescription,
} from "mocks/factory";
import { Patient } from "types/Patient";
import PatientCard from "./PatientCard";

describe("Patient card", () => {
  function renderElement(patient: Patient) {
    render(
      <Providers>
        <PatientCard patient={patient} />
      </Providers>
    );
  }

  it("should display the main patient data in the card", async () => {
    renderElement(aPatientWithLongDescription);

    const patientCard = screen.getByRole("article");

    const avatarImage = screen.getByRole("img", {
      name: "Avatar for Saul Goodman",
    });

    expect(patientCard).toHaveTextContent("Saul Goodman");
    expect(patientCard).toHaveTextContent("Registration date:");
    expect(patientCard).toHaveTextContent("June 10, 2024");

    // note about this: tests don't have css ellipsis to shorten them
    expect(patientCard).toHaveTextContent(
      aPatientWithLongDescription.description
    );

    expect(avatarImage).toBeInTheDocument();
  });

  it("should display the 'see more' button in the card", async () => {
    renderElement(aPatientWithLongDescription);

    const patientCard = getButton(/...see more/i);

    expect(patientCard).toBeInTheDocument;
  });

  it("should display the 'see more' button if patient has website but no description", async () => {
    renderElement(aPatientWithoutDescription);

    const patientCard = getButton(/...see more/i);

    expect(patientCard).toBeInTheDocument;
  });

  it("should not display the 'see more' button if text is too short and lacks of website", async () => {
    renderElement({
      ...aPatientWithShortDescription,
      website: "",
    });

    const patientCard = getButton(/...see more/i);

    expect(patientCard).not.toBeInTheDocument;
  });

  it("should not display the 'see more' button if text lacks of description and website", async () => {
    renderElement({
      ...aPatientWithoutDescription,
      website: "",
    });

    const patientCard = getButton(/...see more/i);

    expect(patientCard).not.toBeInTheDocument;
  });

  it("should display the actions to edit and delete the patient", () => {
    renderElement(aPatientWithLongDescription);

    const viewButton = getButton(/edit/i);
    const deleteButton = getButton(/delete/i);

    expect(viewButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });
});

function getButton(regex: RegExp) {
  return screen.queryByRole("button", { name: regex });
}
