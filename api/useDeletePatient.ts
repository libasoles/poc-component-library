import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import config from "./config";
import { PATIENTS } from "./useFetchPatients";

function deletePatient(id: string) {
  return axios.delete(`${config.api.baseUrl}/users/${id}`);
}

type useDeletePatientProps = {
  onSuccess: () => void;
  onError: () => void;
};

export function useDeletePatient({
  onSuccess: handleSuccess,
  onError: handleError,
}: useDeletePatientProps) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deletePatient(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PATIENTS] });

      handleSuccess();
    },
    onError: () => {
      handleError();
    },
  });
}
