"use client";

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { Patient } from "types/Patient";

const baseUrl = "https://63bedcf7f5cfc0949b634fc8.mockapi.io";

export const patientsQueryKey = "patients";

export async function fetchPatients() {
  const response = await axios.get(`${baseUrl}/users`);

  return response.data;
}

export function useFetchPatients(): UseQueryResult<Patient[]> {
  return useQuery({
    queryKey: [patientsQueryKey],
    queryFn: fetchPatients,
  });
}
