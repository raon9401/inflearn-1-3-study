import { IoMdSend } from "react-icons/io";
import { MdEdit, MdDeleteForever } from "react-icons/md";

import styles from "./Calculation.module.css";

export default function Calculation() {
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
            <li>
              <span className={styles.budgetTitle}>식비</span>
              <span className={styles.budgetCost}>1000</span>
              <div className={styles.budgetBtns}>
                <MdEdit />
                <MdDeleteForever />
              </div>
            </li>
            <li>
              <span className={styles.budgetTitle}>교통비</span>
              <span className={styles.budgetCost}>1000</span>
              <div className={styles.budgetBtns}>
                <MdEdit />
                <MdDeleteForever />
              </div>
            </li>
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
