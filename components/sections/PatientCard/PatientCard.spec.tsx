import {
  BoundFunctions,
  Queries,
  render,
  Screen,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

    // TODO: mock date to avoid this test to fail in the future
    expect(patientCard).toHaveTextContent("June 12, 2024");

    // note about this: tests don't have css ellipsis to shorten them
    expect(patientCard).toHaveTextContent(
      aPatientWithLongDescription.description
    );

    expect(avatarImage).toBeInTheDocument();
  });

  describe("See more button", () => {
    it("should display the 'see more' button in the card", async () => {
      renderElement(aPatientWithLongDescription);

      const patientCard = queryButton(/...see more/i);

      expect(patientCard).toBeInTheDocument;
    });

    it("should display the 'see more' button if patient has website but no description", async () => {
      renderElement(aPatientWithoutDescription);

      const patientCard = queryButton(/...see more/i);

      expect(patientCard).toBeInTheDocument;
    });

    it("should not display the 'see more' button if text is too short and lacks of website", async () => {
      renderElement({
        ...aPatientWithShortDescription,
        website: "",
      });

      const patientCard = queryButton(/...see more/i);

      expect(patientCard).not.toBeInTheDocument;
    });

    it("should not display the 'see more' button if text lacks of description and website", async () => {
      renderElement({
        ...aPatientWithoutDescription,
        website: "",
      });

      const patientCard = queryButton(/...see more/i);

      expect(patientCard).not.toBeInTheDocument;
    });
  });

  describe("Delete button", () => {
    it("should display the actions to edit and delete the patient", () => {
      renderElement(aPatientWithLongDescription);

      const editButton = queryButton(/edit/i);
      const deleteButton = queryButton(/delete/i);

      expect(editButton).toBeInTheDocument();
      expect(deleteButton).toBeInTheDocument();
    });

    it("should display a confirmation dialog when clicking on delete patient button", async () => {
      renderElement(aPatientWithLongDescription);

      await clickDeleteButton();

      await waitFor(() => {
        const dialog = screen.getByRole("dialog");

        expect(dialog).toBeInTheDocument();
        expect(dialog).toHaveTextContent("Delete patient");
        expect(dialog).toHaveTextContent(
          "This action can't be undone. Are you sure you want to delete this patient?"
        );
      });
    });
  });

  describe("Edit button", () => {
    it("should display the edit patient form when clicking on the edit patient button", async () => {
      renderElement(aPatientWithLongDescription);

      const { name, website, description } = aPatientWithLongDescription;

      const editButton = getButton(/edit/i);

      userEvent.click(editButton);

      await waitFor(() => {
        const dialog = screen.getByRole("dialog");

        const cancelButton = queryButton(/cancel/i, within(dialog));
        const confirmButton = queryButton(/ok/i, within(dialog));

        expect(dialog).toBeInTheDocument();
        expect(dialog).toHaveTextContent("Edit patient");

        expect(within(dialog).getByLabelText("Complete name")).toHaveValue(
          name
        );
        expect(within(dialog).getByLabelText("Website")).toHaveValue(website);
        expect(within(dialog).getByLabelText("Description")).toHaveValue(
          description
        );

        expect(cancelButton).toBeInTheDocument();
        expect(confirmButton).toBeInTheDocument();
      });
    });

    it("should close the dialog when clicking on the cancel button", async () => {
      renderElement(aPatientWithLongDescription);

      const editButton = getButton(/edit/i);

      userEvent.click(editButton);

      await waitFor(() => {
        const dialog = screen.getByRole("dialog");

        const cancelButton = within(dialog).getByRole("button", {
          name: /cancel/i,
        });

        userEvent.click(cancelButton);
      });

      expect(screen.findByRole("dialog")).rejects.toThrow();
    });
  });
});

function queryButton(
  regex: RegExp,
  element: Screen | BoundFunctions<Queries> = screen
) {
  return element.queryByRole("button", { name: regex });
}

// TODO: move to a test utils file
function getButton(
  regex: RegExp,
  element: Screen | BoundFunctions<Queries> = screen
) {
  return element.getByRole("button", { name: regex }) as HTMLElement;
}

async function clickDeleteButton() {
  await waitFor(() => {
    const patientCard = screen.getByRole("article");

    const deleteButton = within(patientCard).getByRole("button", {
      name: /delete/i,
    });

    userEvent.click(deleteButton);
  });
}
