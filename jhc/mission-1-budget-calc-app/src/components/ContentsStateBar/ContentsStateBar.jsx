import React from "react";
import "./ContentsStateBar.style.css";

const ContentsStateBar = ({ contentsState }) => {
  const handleStateText = (state) => {
    switch (state) {
      case "submit":
        return "생성";
      case "modify":
        return "수정";
      case "delete":
        return "삭제";
      default:
        return "";
    }
  };

  return (
    <div
      className={`contents-state-area ${
        contentsState === "delete" ? "bg-red" : ""
      }`}
    >
      아이템이 {handleStateText(contentsState)}되었습니다.
    </div>
  );
};

export default ContentsStateBar;
