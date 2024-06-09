import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import config from "./config";
import { PATIENTS } from "./useFetchPatients";

async function createPatient(patient: DTO.Patient) {
  return await axios.post(`${config.api.baseUrl}/users`, patient);
}

type useCreatePatientProps = {
  onSuccess: () => void;
};

export const useCreatePatient = ({
  onSuccess: handleSuccess,
}: useCreatePatientProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPatient,
    onMutate: async (patient: DTO.Patient) => {
      await queryClient.cancelQueries({ queryKey: [PATIENTS] });
      const previouspatients = queryClient.getQueryData([PATIENTS]);

      const randomId = Math.floor(Math.random() * 1000);

      // Optimistically update the cache
      queryClient.setQueryData([PATIENTS], (old: DTO.Patient[]) => [
        { ...patient, id: randomId },
        ...old,
      ]);

      return { previouspatients };
    },
    onError: (error, variables, context) => {
      // Rollback the cache update on error
      queryClient.setQueryData([PATIENTS], context?.previouspatients);
    },
    onSettled: (response, error, variables, context) => {
      if (!response?.status) {
        // Rollback the cache update on unhandled error
        queryClient.setQueryData([PATIENTS], context?.previouspatients);
      } else {
        queryClient.invalidateQueries({ queryKey: [PATIENTS] });

        handleSuccess();
      }
    },
  });
};
