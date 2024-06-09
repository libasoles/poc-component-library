import TextArea from "@/components/generic/forms/TextArea";
import TextField from "@/components/generic/forms/TextField";
import Row from "@/components/generic/layout/Row";

const NewPatienForm = () => {
  return (
    <form className="px-8 pt-6 pb-8 mb-4">
      <Row className="gap-4">
        <TextField label="Complete name" placeholder="Name" name="name" />
        <TextField label="Website" placeholder="Url" name="website" />
      </Row>

      <TextArea
        label="Description"
        placeholder="Description"
        name="description"
      />
    </form>
  );
};

export default NewPatienForm;
