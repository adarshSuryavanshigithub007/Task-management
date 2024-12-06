import React from "react";

const Selects = ({ field, onChange }) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          {field.field_label}
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={onChange}
          required={field.required}
        >
          <option selected>{field.field_label}</option>
          {field.options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Selects;
