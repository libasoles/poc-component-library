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
import NewPatientButton from "./NewPatientButton";

describe("New patient dialog", () => {
  beforeEach(() => {
    render(
      <Providers>
        <NewPatientButton />
      </Providers>
    );
  });

  describe("New patien dialog", () => {
    it("should display the add new patient form when clicking on the button", async () => {
      const addPatientButton = getButton(/add patient/i);

      userEvent.click(addPatientButton);

      await waitFor(() => {
        const dialog = screen.getByRole("dialog");

        const cancelButton = getButton(/cancel/i, within(dialog));
        const confirmButton = getButton(/ok/i, within(dialog));

        expect(dialog).toBeInTheDocument();
        expect(dialog).toHaveTextContent("Create patient");

        expect(cancelButton).toBeInTheDocument();
        expect(confirmButton).toBeInTheDocument();
      });
    });

    it("should close the dialog when clicking on the cancel button", async () => {
      const addPatientButton = getButton(/add patient/i);

      userEvent.click(addPatientButton);

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

// TODO: move to a test utils file
function getButton(
  regex: RegExp,
  element: Screen | BoundFunctions<Queries> = screen
) {
  return element.getByRole("button", { name: regex }) as HTMLElement;
}
