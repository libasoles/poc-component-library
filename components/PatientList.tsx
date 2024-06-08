"use client";

import { useFetchPatients } from "api/useFetchPatients";

const PatientList = () => {
  const { data: patients, isLoading, isError } = useFetchPatients();

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <ul>
      {patients?.map((patient) => (
        <li key={patient.id}>
          <h3>{patient.name}</h3>
          <p>{patient.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default PatientList;
