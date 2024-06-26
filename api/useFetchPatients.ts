"use client";

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import dayjs from "dayjs";
import { Patient } from "types/Patient";
import config from "./config";

export const PATIENTS = "patients";

export async function fetchPatients(): Promise<DTO.Patient[]> {
  const response = await axios.get(`${config.api.baseUrl}/users`);

  return response.data;
}

export function useFetchPatients(): UseQueryResult<Patient[]> {
  return useQuery({
    queryKey: [PATIENTS],
    queryFn: fetchPatients,
    select: mapPatients,
  });
}
const mapPatients = (patients: DTO.Patient[]): Patient[] => {
  return patients.map(mapPatient).sort((a, b) => b.createdAt.diff(a.createdAt));
};

const mapPatient = (patient: DTO.Patient): Patient => ({
  ...patient,
  createdAt: dayjs(patient.createdAt),
});
