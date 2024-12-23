import React from "react";

const Model = ({ closeModal }) => {
  return (
    <div>
      <div
        className="modal d-block"
        tabIndex="-1"
        role="dialog"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Background for the overlay
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="modal-fullscreen" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"> Details</h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">assas</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
