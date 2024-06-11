import dayjs from "dayjs";
import { Patient } from "types/Patient";

export function createPatient({ ...data }: Partial<Patient>): Patient {
  const randomId = Math.floor(Math.random() * 1000);

  return {
    id: String(randomId),
    name: "John Doe",
    avatar: "https://person.com/1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.",
    website: "https://test.com",
    createdAt: dayjs(),
    ...data,
  };
}

export const aListOfPatients = [
  createPatient({ name: "Lawrence McLaurin" }),
  createPatient({ name: "Alice Lillidel" }),
  createPatient({ name: "Beatriz Pasadena" }),
];

export const aPatientWithLongDescription = createPatient({
  name: "Saul Goodman",
});

export const aPatientWithShortDescription = createPatient({
  name: "Saul Goodman",
  description: "Lorem ipsum dolor sit.",
});

export const aPatientWithoutDescription = createPatient({
  name: "Saul Goodman",
  description: "",
});
