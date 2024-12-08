import React, { useState } from "react";
import teachersJson from "../../json/TeachersDetails.json";
import DynamicForm from "../../components/forms/DynamicForm";
import axios from "axios";
import { fileToBase64 } from "../../utils/function/commonFunctions";

const AddTeacher = () => {
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    gender: "",
    age: "",
    file: null, // File object
    phone_number: "",
    address: "",
  });

  const elements = teachersJson[0] || {};
  const pageLabel = elements.page_label || "No Label Available";
  const fields = elements.field || [];

  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };
 
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const dataToSubmit = { ...formData };
    if (formData.file) {
      dataToSubmit.file = await fileToBase64(formData.file);
    }
  
    try {
      const response = await axios.post("http://localhost:5000/users", dataToSubmit);
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  

  return (
    <div>
      <div className="container m-3">
        <div className="row d-flex justify-content-center align-items-center">
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
