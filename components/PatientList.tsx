"use client";

import { useFetchPatients } from "api/useFetchPatients";
import PatientCard from "./PatientCard";

const PatientList = () => {
  const { data: patients, isLoading, isError } = useFetchPatients();

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <ul>
      {patients?.map((patient) => (
        <PatientCard patient={patient} key={patient.id} />
      ))}
    </ul>
  );
};

export default PatientList;
