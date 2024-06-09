import TextArea from "@/components/generic/forms/TextArea";
import TextField from "@/components/generic/forms/TextField";
import Row from "@/components/generic/layout/Row";
import { forwardRef, Ref } from "react";
import { useFormContext } from "react-hook-form";

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
    <form ref={formRef} className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <Row className="gap-4">
        <TextField
          label="Complete name"
          placeholder="Name"
          {...register("name", {
            required: "Required",
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
          required: "Required",
          minLength: {
            value: 10,
            message: "Must be at least 10 characters",
          },
        })}
        error={errors?.description?.message as string}
      />
    </form>
  );
};

export default forwardRef(NewPatienForm);
