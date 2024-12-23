import React, { useState } from "react";
import Model from "../../components/Model";
// import 'bootstrap/dist/css/bootstrap.min.css';

const AssignProjects = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedTask, setSelectedTask] = useState(null);

  
  // Handle modal open
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Handle modal close
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Extract initials from card title
  const title = "Book Management";
  const initials = title
    .split(" ")
    .map((word) => word[0])
    .join(""); // Extract initials from the title

  return (
    <div className="card m-3" style={{ maxWidth: "540px",cursor: "pointer"  }}  onClick={openModal} // Open modal on title click
                  >
      <div className="row g-0">
        {/* Avatar section with initials */}
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <div
            className="d-flex justify-content-center align-items-center rounded-circle"
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "#007bff", // Customize background color
              color: "white",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            {initials}
          </div>
        </div>
        {/* Card Body */}
        <div className="col-md-8">
          <div className="card-body">
            {/* Dynamic card title */}
            <h5 className="card-title" style={{ marginBottom: "0" }}>
              {title}
            </h5>
            {/* Web application text */}
            <span
              style={{ fontSize: "12px", marginTop: "0", display: "block" }}
            >
              Web application
            </span>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text d-flex gap-2">
              {/* View All Details with a "chip" */}
              <small className="text-muted d-flex align-items-center">
                <span
                  className="badge rounded-pill text-bg-warning"
                  style={{
                    fontSize: "12px",
                    padding: "5px 5px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "white",
                  }}
                >
                  <i
                    className="fas fa-info-circle"
                    style={{ fontSize: "10px" }}
                  ></i>
                  View Details
                </span>
              </small>
              {/* Assign By */}
              <small className="text-muted">
                Assign By: Adarsh Suryavanshi
              </small>
            </p>
          </div>
        </div>
      </div>
       {/* Modal for task details */}
       {isModalOpen && <Model  closeModal={closeModal} />}
    </div>
  );
};

export default AssignProjects;
