import {
  validatePassword,
  ValidEmailId,
} from "../../utils/function/commonFunctions";
import FileUpload from "./formComponents/FileUpload";
import Inputs from "./formComponents/Inputs";
import Selects from "./formComponents/Select";

const DynamicForm = ({ field, onChange }) => {
  const functionMapping = {
    ValidEmailId,
    validatePassword,
  };
  // Handle change for individual fields
  const handleChange = (event) => {
    const { value } = event.target;
    const validate = functionMapping[field.function];
    if (validate) {
      // console.log(validate);
      console.log("testing", validate(value));
    }
    onChange(field.field_id, value); // Pass the field name and value to parent
    if (field.field_type === "file") {
      const file = event.target.files[0];
      console.log("File uploaded:", file);
      onChange(field.field_id, file); // Pass file object
      return; // Exit early since file inputs don't need further processing
    }
  };
  //   const handleUploadImage = (event)=>{

  //  onChange(field.field_id, value);
  //   }

  console.log(field.field_type);
  switch (field.field_type) {
    case "text":
    case "email":
    case "tel":
    case "password":
    case "number":
      return (
        <Inputs
          field={field}
          onChange={handleChange} // Pass handleChange to Inputs
        />
      );
    case "file":
      return <FileUpload field={field} onChange={handleChange} />;

    case "select":
      return <Selects field={field} onChange={handleChange} />;

    default:
      return;
  }
};

export default DynamicForm;
