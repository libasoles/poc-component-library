import { Patient } from "types/Patient";

const PatientList = async () => {
  const response = await fetch(
    "https://63bedcf7f5cfc0949b634fc8.mockapi.io/users"
  );

  const patients: Patient[] = await response.json();

  return (
    <ul>
      {patients.map((patient) => (
        <li key={patient.id}>
          <h3>{patient.name}</h3>
          <p>{patient.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default PatientList;
