import React from "react";
import "./ListContents.style.css";

const ListContents = ({
  contentsList: data,
  setContentsList,
  setSelectContentsIdx,
  setIsModify,
  setContentsState,
}) => {
  const handleContentsDelete = (idx) => {
    const newArr = data.filter((el, index) => index !== idx);
    setContentsState("delete");
    setContentsList(newArr);
  };

  const handleModify = (idx) => {
    setSelectContentsIdx(idx);
    setIsModify(true);
  };

  return (
    <section className="contents-area">
      {data?.map((item, idx) => (
        <article className="contents-box" key={idx}>
          <span className="contents-name">{item.name}</span>
          <span className="contents-cost">{item.cost}</span>
          <div className="icon-box">
            <button onClick={() => handleModify(idx)}>
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/color/48/pencil--v1.png"
                alt="pencil--v1"
              />
            </button>
            <button onClick={() => handleContentsDelete(idx)}>
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/color/48/trash--v1.png"
                alt="trash--v1"
              />
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ListContents;
