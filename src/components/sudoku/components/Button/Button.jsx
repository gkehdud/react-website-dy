import React from "react";
import "./button.css";

// const STYLES = [
//   "btn--start--solid",
//   "btn--primary--solid",
//   "btn--warning--solid",
//   "btn--danger--solid",
//   "btn--success--solid",
//   "btn--primary--outline",
//   "btn--warning--outline",
//   "btn--danger--outline",
//   "btn--success--outline",
// ];

const Button = ({ text, type, onClick, buttonStyle, disabled }) => {
  // const checkButtonStyle = STYLES.includes(buttonStyle)
  //   ? buttonStyle
  //   : STYLES[0];

  return (
    <button disabled = {disabled} className={`btn ${buttonStyle}`} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
