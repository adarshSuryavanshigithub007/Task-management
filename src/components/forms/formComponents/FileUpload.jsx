import React from "react";

const FileUpload = ({ field, onChange }) => {
  return (
    <div>
      <div className="mb-3">
        <label for="formFileLg" className="form-label">
          {field.field_label}
        </label>
        <input
          className="form-control form-control-sm"
          id="formFilesm"
          type={field.field_type}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FileUpload;
