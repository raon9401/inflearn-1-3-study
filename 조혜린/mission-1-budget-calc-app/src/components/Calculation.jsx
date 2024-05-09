import { IoMdSend } from "react-icons/io";
import { MdEdit, MdDeleteForever } from "react-icons/md";

import styles from "./Calculation.module.css";

import { useState } from "react";

export default function Calculation() {
  const [budgets, setBudgets] = useState([
    {
      id: 1,
      title: "식비",
      cost: "10000",
    },
    {
      id: 2,
      title: "간식비",
      cost: "2400",
    },
  ]);

  const handleDelBudgetItemClick = (id) => {
    setBudgets((prev) => [...prev.filter((data) => data.id !== id)]);
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
            <input id="expense" type="text" placeholder="예) 식비" />
            <input id="cost" type="number" value={0} />
          </div>
          <button className={styles.btn}>
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
          <button className={`${styles.btn} ${styles.listDelBtn}`}>
            목록 지우기 <MdDeleteForever />
          </button>
        </div>
      </main>
      <footer>
        <h2 style={{ textAlign: "end" }}>총 지출: 900원</h2>
      </footer>
    </>
  );
}
