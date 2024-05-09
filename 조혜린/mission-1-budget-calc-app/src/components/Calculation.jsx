import { ToastContainer, Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { IoMdSend } from "react-icons/io";
import { MdEdit, MdDeleteForever } from "react-icons/md";

import styles from "./Calculation.module.css";

import { useState } from "react";

export default function Calculation() {
  const [budgets, setBudgets] = useState([]);
  const [budgetTitle, setBudgetTitle] = useState("");
  const [cost, setCost] = useState(0);
  const [isEdit, setIsEdit] = useState({ flag: false, budgetId: null });

  const handleDelBudgetItemClick = (id) => {
    setBudgets((prev) => [...prev.filter((data) => data.id !== id)]);
    toast.error("아이템이 삭제되었습니다.", {
      position: "top-right",
    });
  };
  const handleDelBudgetListClick = () => {
    setBudgets([]);
    toast.error("아이템이 모두 삭제되었습니다.", {
      position: "top-right",
    });
  };
  const handleBudgetSendClick = (e) => {
    if (budgetTitle === "" || cost === "") return;
    e.preventDefault();
    const newBudget = {
      id: Date.now(),
      title: budgetTitle,
      cost,
    };

    setBudgets((prev) => [...prev, newBudget]);
    setBudgetTitle("");
    setCost(0);

    toast.success("아이템이 생성되었습니다.", {
      position: "top-right",
    });
  };
  const handleEditBudgetClick = (id) => {
    setIsEdit({ budgetId: id, flag: true });

    const findBudget = budgets.find((budget) => budget.id === id);

    setBudgetTitle(findBudget.title);
    setCost(findBudget.cost);
  };
  const handleUpdateBudgetClick = (e) => {
    e.preventDefault();

    const findEditBudgetIndex = budgets.findIndex(
      (budget) => budget.id === isEdit.budgetId
    );

    budgets.splice(findEditBudgetIndex, 1, {
      id: isEdit.budgetId,
      title: budgetTitle,
      cost,
    });

    setBudgets([...budgets]);

    // reset
    setIsEdit({ budgetId: null, flag: false });
    setCost(0);
    setBudgetTitle("");

    toast.success("아이템이 수정되었습니다.", {
      position: "top-right",
    });
  };

  const handleBudgetTitleChange = (e) => {
    let titleVal = e.target.value;
    setBudgetTitle(titleVal);
  };
  const handleCostChange = (e) => {
    let costVal = e.target.value;
    setCost(costVal);
  };

  const calcTotalExpens = () => {
    let totalExpense = budgets.reduce(
      (acc, curr) => acc + Number(curr.cost),
      0
    );
    return totalExpense;
  };

  return (
    <>
      <header>
        <h1>예산 계산기</h1>
      </header>
      <main className={styles.main}>
        <form className={styles.form}>
          <div className={styles.inputBudget}>
            <label htmlFor="expense">지출 항목</label>
            <label htmlFor="cost">비용</label>
            <input
              id="expense"
              type="text"
              placeholder="예) 식비"
              onChange={handleBudgetTitleChange}
              value={budgetTitle}
            />
            <input
              id="cost"
              type="number"
              value={cost}
              onChange={handleCostChange}
            />
          </div>
          {isEdit.flag ? (
            <button className={styles.btn} onClick={handleUpdateBudgetClick}>
              수정 <IoMdSend />
            </button>
          ) : (
            <button className={styles.btn} onClick={handleBudgetSendClick}>
              제출 <IoMdSend />
            </button>
          )}
        </form>
        <div>
          <ul className={styles.budgets}>
            {budgets.map((budget) => (
              <li key={budget.id}>
                <span className={styles.budgetTitle}>{budget.title}</span>
                <span className={styles.budgetCost}>{budget.cost}</span>
                <div className={styles.budgetBtns}>
                  <MdEdit
                    className={styles.editBtn}
                    onClick={() => handleEditBudgetClick(budget.id)}
                  />
                  <MdDeleteForever
                    className={styles.delBtn}
                    onClick={() => handleDelBudgetItemClick(budget.id)}
                  />
                </div>
              </li>
            ))}
          </ul>
          <button
            className={`${styles.btn} ${styles.listDelBtn}`}
            onClick={handleDelBudgetListClick}
          >
            목록 지우기 <MdDeleteForever />
          </button>
        </div>
      </main>
      <footer>
        <h2 style={{ textAlign: "end" }}>
          총 지출: {`${calcTotalExpens()}원`}
        </h2>
      </footer>
      <ToastContainer />
    </>
  );
}
