import React from "react";
import "./SubmitBtn.style.css";

const SubmitBtn = ({ handleContentsList, isModify }) => {
  return (
    <button className="green-btn" onClick={handleContentsList}>
      {isModify ? "수정" : "제출"}
      <img
        src="https://img.icons8.com/material-rounded/24/FFFFFF/sent.png"
        alt="send icon"
      />
    </button>
  );
};

export default SubmitBtn;
