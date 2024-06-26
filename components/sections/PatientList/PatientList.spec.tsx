import { render, screen } from "@testing-library/react";
import Providers from "app/providers";
import { aListOfPatients } from "mocks/factory";
import { createVirtualizedList } from "mocks/virtualList";
import PatientList from "./PatientList";

describe("List of patients", () => {
  function renderElement({
    patients = aListOfPatients,
    isError = false,
    isLoading = false,
  }) {
    const virtualizedList = createVirtualizedList(aListOfPatients);

    render(
      <Providers>
        <PatientList
          patients={patients}
          virtualizedList={virtualizedList}
          isLoading={isLoading}
          isError={isError}
        />
      </Providers>
    );
  }

  it("should display a loading animation when loading", async () => {
    renderElement({ isLoading: true });

    const skeletons = screen.getAllByTestId("loading-skeleton");

    expect(skeletons).toHaveLength(5);
  });

  it("should display an error message when there is an error", async () => {
    renderElement({ isError: true });

    const message = screen.getByText(
      "We couldn't retrieve the list of patients. Either create one, or try loading the page again in a few seconds."
    );

    expect(message).toBeInTheDocument();
  });

  it("should display a scrollable list of patients that reveals more items on scroll", async () => {
    renderElement({ patients: aListOfPatients });

    const patients = screen.getAllByRole("listitem");

    expect(patients).toHaveLength(3);
    expect(patients[0]).toHaveTextContent(aListOfPatients[0].name);
    expect(patients[1]).toHaveTextContent(aListOfPatients[1].name);
    expect(patients[2]).toHaveTextContent(aListOfPatients[2].name);
  });

  describe("Delete patient", () => {
    // TODO: test it should delete an patient when clicking the confirm button
  });
});
