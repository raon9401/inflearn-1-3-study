import { IoMdSend } from "react-icons/io";
import { MdEdit, MdDeleteForever } from "react-icons/md";

import styles from "./Calculation.module.css";

import { useState } from "react";

export default function Calculation() {
  const [budgets, setBudgets] = useState([]);
  const [budgetTitle, setBudgetTitle] = useState();
  const [cost, setCost] = useState(0);

  const handleDelBudgetItemClick = (id) => {
    setBudgets((prev) => [...prev.filter((data) => data.id !== id)]);
  };
  const handleDelBudgetListClick = () => {
    setBudgets([]);
  };
  const handleBudgetSendClick = (e) => {
    e.preventDefault();
    const newBudget = {
      id: new Date(),
      title: budgetTitle,
      cost,
    };

    setBudgets((prev) => [...prev, newBudget]);
    setBudgetTitle("");
    setCost(0);
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
          <button className={styles.btn} onClick={handleBudgetSendClick}>
            제출 <IoMdSend />
          </button>
        </form>
        <div>
          <ul className={styles.budgets}>
            {budgets.map((budget) => (
              <li key={budget.id}>
                <span className={styles.budgetTitle}>{budget.title}</span>
                <span className={styles.budgetCost}>{budget.cost}</span>
                <div className={styles.budgetBtns}>
                  <MdEdit className={styles.editBtn} />
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
    </>
  );
}
