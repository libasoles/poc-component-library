import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import config from "./config";
import { PATIENTS } from "./useFetchPatients";

export type UpdatePatientParams = {
  patientId: string;
  patientData: DTO.EditablePatient;
};

async function updatePatient({ patientId, patientData }: UpdatePatientParams) {
  return await axios.put(
    `${config.api.baseUrl}/users/${patientId}`,
    patientData
  );
}

type useUpdatePatientProps = {
  onSuccess: () => void;
  onError: () => void;
};

export function useUpdatePatient({
  onSuccess: handleSuccess,
  onError: handleError,
}: useUpdatePatientProps) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePatient,
    onMutate: async ({ patientId, patientData }: UpdatePatientParams) => {
      await queryClient.cancelQueries({ queryKey: [PATIENTS] });
      const patients = queryClient.getQueryData([
        PATIENTS,
      ]) as DTO.EditablePatient[];

      const updatedPatients = patients?.map((patient: DTO.EditablePatient) =>
        patient.id === patientId ? { ...patient, ...patientData } : patient
      );

      // Optimistically update the cache
      queryClient.setQueryData(
        [PATIENTS],
        (old: DTO.EditablePatient[]) => updatedPatients
      );

      return { updatedPatients };
    },
    onError: (error, variables, context) => {
      const cachedPatientList =
        context?.updatedPatients as DTO.EditablePatient[];

      // Rollback the cache update on error
      queryClient.setQueryData([PATIENTS], cachedPatientList);

      handleError();
    },
    onSuccess: (response, variables, context) => {
      queryClient.invalidateQueries({ queryKey: [PATIENTS] });

      handleSuccess();
    },
  });
}
