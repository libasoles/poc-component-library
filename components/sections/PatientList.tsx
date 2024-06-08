"use client";

import { useFetchPatients } from "api/useFetchPatients";
import PatientCard from "./PatientCard";
import PatientListLoading from "./PatientListLoading";

const PatientList = () => {
  const { data: patients, isLoading, isError } = useFetchPatients();

  return (
    <ul className="w-full">
      {isLoading && <PatientListLoading />}

      {patients &&
        patients?.map((patient) => (
          <PatientCard patient={patient} key={patient.id} />
        ))}
    </ul>
  );
};

export default PatientList;
