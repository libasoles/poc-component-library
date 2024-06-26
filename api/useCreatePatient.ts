import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import config from "./config";
import { PATIENTS } from "./useFetchPatients";

async function createPatient(patient: DTO.EditablePatient) {
  return await axios.post(`${config.api.baseUrl}/users`, patient);
}

type useCreatePatientProps = {
  onSuccess: () => void;
  onError: () => void;
};

export type CreateMutationFn = {
  patientData: DTO.EditablePatient;
};

export const useCreatePatient = ({
  onSuccess: handleSuccess,
  onError: handleError,
}: useCreatePatientProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPatient,
    onMutate: async (patient: DTO.EditablePatient) => {
      await queryClient.cancelQueries({ queryKey: [PATIENTS] });
      const previouspatients = queryClient.getQueryData([PATIENTS]);

      const randomId = Math.floor(Math.random() * 100000);

      // Optimistically update the cache
      queryClient.setQueryData([PATIENTS], (old: DTO.EditablePatient[]) => [
        { ...patient, id: randomId },
        ...old,
      ]);

      return { previouspatients };
    },
    onError: (error, variables, context) => {
      // Rollback the cache update on error
      queryClient.setQueryData([PATIENTS], context?.previouspatients);

      handleError();
    },
    onSettled: (response, error, variables, context) => {
      queryClient.invalidateQueries({ queryKey: [PATIENTS] });

      handleSuccess();
    },
  });
};
