import TextArea from "@/components/generic/forms/TextArea";
import TextField from "@/components/generic/forms/TextField";
import Row from "@/components/generic/layout/Row";
import { forwardRef, Ref } from "react";
import { useFormContext } from "react-hook-form";

const minNamelength = 3;
const minDescriptionlength = 10;

type Props = {
  handleSubmit: () => void;
};

const PatientForm = (
  { handleSubmit }: Props,
  formRef?: Ref<HTMLFormElement>
) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <form ref={formRef} className="pt-6 pb-8" onSubmit={handleSubmit}>
      <Row className="gap-4">
        <TextField
          id="name"
          label="Complete name"
          placeholder="Name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: minNamelength,
              message: `Must be at least ${minNamelength} characters`,
            },
          })}
          error={errors?.name?.message as string}
        />
        <TextField
          id="website"
          label="Website"
          placeholder="Url"
          {...register("website")}
          error={errors?.website?.message as string}
        />
      </Row>

      <TextArea
        id="description"
        label="Description"
        placeholder="Description"
        {...register("description", {
          required: "Description is required",
          minLength: {
            value: minDescriptionlength,
            message: `Must be at least ${minDescriptionlength} characters`,
          },
        })}
        error={errors?.description?.message as string}
      />
    </form>
  );
};

export default forwardRef(PatientForm);
