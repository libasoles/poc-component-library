import { MutationFunction } from "@tanstack/react-query";
import { useCreatePatient } from "api/useCreatePatient";
import { UpdatePatientParams, useUpdatePatient } from "api/useUpdatePatient";
import { useRef } from "react";
import { useForm } from "react-hook-form";

const defaultValues: DTO.EditablePatient = {
  name: "",
  website: "",
  description: "",
};

type usePatientForm = {
  patientId?: string;
  initialValues?: DTO.EditablePatient;
  onSuccess: () => void;
  onError: () => void;
};

export const usePatientForm = ({
  patientId,
  initialValues = defaultValues,
  onSuccess: handleSuccess,
  onError: handleError,
}: usePatientForm) => {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<DTO.EditablePatient>({
    defaultValues: initialValues,
  });

  const useMutation = patientId ? useUpdatePatient : useCreatePatient;

  const mutation = useMutation({
    onSuccess: () => {
      handleSuccess();
      resetState();
    },
    onError: handleError,
  });

  const handleSubmit = form.handleSubmit((values) => {
    const patientData = {
      ...values,
    } as DTO.EditablePatient;

    if (patientId) {
      const mutate = mutation.mutate as MutationFunction<UpdatePatientParams>;

      mutate({ patientData, patientId });
    } else {
      const mutate = mutation.mutate as MutationFunction<DTO.EditablePatient>;

      mutate(patientData);
    }
  });

  function resetState() {
    form.reset();
    mutation.reset();
  }

  return {
    formRef,
    form,
    reset: resetState,
    handleSubmit,
    errorSubmitting: mutation.error,
  };
};
