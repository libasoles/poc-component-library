import TextArea from "@/components/generic/forms/TextArea";
import TextField from "@/components/generic/forms/TextField";
import Row from "@/components/generic/layout/Row";
import { forwardRef, Ref } from "react";
import { useFormContext } from "react-hook-form";

const minDescriptionlength = 10;

type Props = {
  handleSubmit: () => void;
};

const NewPatienForm = (
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
          label="Complete name"
          placeholder="Name"
          {...register("name", {
            required: "Name is required",
          })}
          error={errors?.name?.message as string}
        />
        <TextField
          label="Website"
          placeholder="Url"
          {...register("website")}
          error={errors?.website?.message as string}
        />
      </Row>

      <TextArea
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

export default forwardRef(NewPatienForm);
