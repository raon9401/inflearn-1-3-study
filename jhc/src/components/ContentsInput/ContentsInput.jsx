import React from "react";

const ContentsInput = ({
  inputName,
  inputCost,
  setInputName,
  setInputCost,
}) => {
  return (
    <>
      <div className="input-box">
        <span>지출 항목</span>
        <input
          className="contents-input"
          type="text"
          placeholder="예) 렌트비"
          onChange={(e) => setInputName(e.target.value)}
          value={inputName}
        />
      </div>
      <div className="input-box">
        <span>비용</span>
        <input
          className="contents-input"
          type="number"
          value={inputCost}
          onChange={(e) => setInputCost(e.target.value)}
        />
      </div>
    </>
  );
};

export default ContentsInput;
