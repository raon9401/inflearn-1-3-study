import React from "react";
import "./DeleteBtn.style.css";

const DeleteBtn = ({ handleResetContentsList }) => {
  return (
    <button className="green-btn" onClick={handleResetContentsList}>
      목록 지우기
      <img
        width="24"
        height="24"
        src="https://img.icons8.com/material-rounded/24/FFFFFF/delete.png"
        alt="delete"
      />
    </button>
  );
};

export default DeleteBtn;
