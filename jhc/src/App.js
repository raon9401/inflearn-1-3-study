import { useEffect, useState } from "react";
import "./App.css";
import DeleteBtn from "./common/Button/DeleteBtn/DeleteBtn";
import SubmitBtn from "./common/Button/SubmitBtn/SubmitBtn";
import ContentsInput from "./components/ContentsInput/ContentsInput";
import ListContents from "./components/ListContents/ListContents";
import ContentsStateBar from "./components/ContentsStateBar/ContentsStateBar";

function App() {
  const [inputName, setInputName] = useState("");
  const [inputCost, setInputCost] = useState(0);
  const [contentsList, setContentsList] = useState([]);

  // 수정 관련 state
  const [isModify, setIsModify] = useState(false);
  const [selectContentsIdx, setSelectContentsIdx] = useState();

  // contnets modify, submit, delete 상태 state
  const [contentsState, setContentsState] = useState();

  const handleContentsList = () => {
    setInputName("");
    setInputCost(0);

    if (isModify) {
      const copyContentsList = [...contentsList];
      copyContentsList[selectContentsIdx] = {
        name: inputName,
        cost: inputCost,
      };
      setContentsList([...copyContentsList]);
      setIsModify(false);
      setContentsState("modify");
    } else {
      setContentsList([...contentsList, { name: inputName, cost: inputCost }]);
      setContentsState("submit");
    }
  };

  const handleResetContentsList = () => {
    setContentsList([]);
  };

  const handleTotalCost = () => {
    return contentsList.reduce((acc, cur) => acc + Number(cur.cost), 0);
  };

  useEffect(() => {
    if (isModify) {
      setInputName(contentsList[selectContentsIdx]?.name);
      setInputCost(contentsList[selectContentsIdx]?.cost);
    }
    // eslint-disable-next-line
  }, [isModify]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentsState();
    }, 5000);

    return () => clearTimeout(timer);
  }, [contentsState]);

  return (
    <div className="App">
      {contentsState && <ContentsStateBar contentsState={contentsState} />}
      <h1 className="title-text">예산 계산기</h1>
      <section className="main">
        <article className="input-area">
          <ContentsInput
            inputName={inputName}
            inputCost={inputCost}
            setInputName={setInputName}
            setInputCost={setInputCost}
          />
        </article>
        <article>
          <SubmitBtn
            handleContentsList={handleContentsList}
            isModify={isModify}
          />
        </article>
        <article className="contents-area">
          <ListContents
            contentsList={contentsList}
            setContentsList={setContentsList}
            setSelectContentsIdx={setSelectContentsIdx}
            setIsModify={setIsModify}
            setContentsState={setContentsState}
          />
        </article>
        <article>
          {contentsList.length !== 0 && (
            <DeleteBtn handleResetContentsList={handleResetContentsList} />
          )}
        </article>
      </section>
      <h2 className="cost-text">
        총지출: {contentsList.length !== 0 ? handleTotalCost() : 0}원
      </h2>
    </div>
  );
}

export default App;
