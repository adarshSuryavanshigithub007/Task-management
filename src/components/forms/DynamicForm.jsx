import {
  validatePassword,
  ValidEmailId,
} from "../../utils/function/commonFunctions";
import Inputs from "./formComponents/Inputs";

const DynamicForm = ({ field, onChange }) => {
  const functionMapping = {
    ValidEmailId,
    validatePassword,
  };
  // Handle change for individual fields
  const handleChange = (event) => {
    const { value } = event.target;
    console.log("value", value);
    console.log(field.validatePassword);
    const validate = functionMapping[field.function];
    if (validate) {
      console.log(validate);
      console.log("testing", validate(value));
    }
    onChange(field.field_id, value); // Pass the field name and value to parent
  };
  switch (field.field_type) {
    case "text":
    case "email":
    case "tel":
    case "password":
      return (
        <Inputs
          field={field}
          onChange={handleChange} // Pass handleChange to Inputs
        />
      );

    default:
      return;
  }
};

export default DynamicForm;
