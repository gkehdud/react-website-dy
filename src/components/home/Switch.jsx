import React from "react";
import "./switch.css";

const Switch = ({ isOn, handleToggle, onColor }) => {
  return (
    <label style={{ background: isOn && onColor }} className="react-switch">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        type="checkbox"
      />
      <div className="react-switch-button" />
      <div className="react-switch-labels">
        <span>Public</span>
        <span>Private</span>
      </div>
    </label>
  );
};

export default Switch;
