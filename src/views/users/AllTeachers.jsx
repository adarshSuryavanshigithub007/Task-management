import React, { useEffect, useState } from "react";

import TableJson from "../../json/Tables.json";
import axios from "axios";

const AllTeachers = () => {
  const [teachers, setTeachers] = useState([]);

  const getTeachersData = () => {
    axios.get("http://localhost:5000/users").then((response) => {
      console.log(response.data);
      setTeachers(response.data);
    });
  };
  console.log(teachers);
  useEffect(() => {
    getTeachersData();
  }, []);

  const elements = TableJson[0] || {};
  console.log(elements);
  const pageLabel = elements.page_label || "No Label Available";
  const columns = elements.Teachers || [];
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 justify-content-center">
            <table class="table">
              <thead>
                <tr>
                  {columns.map((col, i) => {
                    return <th key={i}>{col.controlName}</th>;
                  })}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((eachItem, i) => (
                  <tr key={i}>
                    {columns.map((col, cI) => (
                      <td key={cI}>{eachItem[col.controlValue]}</td>
                    ))}
                    <td>
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => handleEdit(row.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(row.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTeachers;
