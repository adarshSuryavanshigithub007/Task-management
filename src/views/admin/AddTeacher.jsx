import React, { useState } from "react";
import teachersJson from "../../json/TeachersDetails.json";
import DynamicForm from "../../components/forms/DynamicForm";

console.log(teachersJson);

const AddTeacher = () => {
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    gender: "",
    age: "",
    photo: "",
    phone_number: "",
    address: "",
  });
  const elements = teachersJson[0] || {};
  console.log(elements);
  const pageLabel = elements.page_label || "No Label Available";
  const fields = elements.field || [];
  const handleInputChange = (fieldName, value) => {
    console.log(value);
    console.log(fieldName);
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log("Form Submitted:", formData);
    // Add your API call or submission logic here
  };
  return (
    <div>
      <div className="container m-3">
        <div className="row  d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="card">
              <h5 className="card-header bg-success text-white">{pageLabel}</h5>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {fields.map((field, i) => (
                    <DynamicForm
                      key={i}
                      field={field}
                      onChange={handleInputChange}
                    />
                  ))}
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
