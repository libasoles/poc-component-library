import { useCreatePatient } from "api/useCreatePatient";
import { useRef } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  website: string;
  description: string;
};

const defaultValues: FormValues = {
  name: "",
  website: "",
  description: "",
};

type usePatientForm = {
  onSuccess: () => void;
};

export const usePatientForm = ({
  onSuccess: handleSuccess,
}: usePatientForm) => {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<FormValues>({
    defaultValues,
  });

  const mutation = useCreatePatient({
    onSuccess: () => {
      handleSuccess();
      resetState();
    },
  });

  const handleSubmit = form.handleSubmit((values) => {
    const newPatient = {
      ...values,
    };

    mutation.mutate(newPatient as DTO.Patient);
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
