import React from "react";
import "./noHintModal.css";

import Button from "./../Button/Button.jsx";

const noHintModal = ({ closeModal }) => {
  return (
    <div className="noHintModal">
      <div className="noHint-container">
        <div className="noHint-close-btn-container">
          <button onClick={closeModal}>X</button>
        </div>
        <div className="noHint-title">
          <h2>No solution</h2>
        </div>
        <div className="noHint-body">
          <p>
            No hint with current grid. You gotta change some of it.
          </p>
        </div>
        <div className="noHint-footer">
          <Button
            onClick={closeModal}
            text="Continue"
          />
        </div>
      </div>
    </div>
  );
};

export default noHintModal;
