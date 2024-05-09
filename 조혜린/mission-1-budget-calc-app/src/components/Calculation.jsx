import { IoMdSend } from "react-icons/io";
import { MdEdit, MdDeleteForever } from "react-icons/md";

export default function Calculation() {
  return (
    <>
      <header>
        <h1>예산 계산기</h1>
      </header>
      <main>
        <form>
          <div>
            <label htmlFor="expense">지출 항목</label>
            <input id="expense" type="text" placeholder="예) 식비" />
            <label htmlFor="cost">비용</label>
            <input id="cost" type="number" value={0} />
          </div>
          <button>
            제출 <IoMdSend />
          </button>
        </form>
        <div>
          <ul>
            <li>
              <span>식비</span>
              <span>1000</span>
              <div>
                <MdEdit />
                <MdDeleteForever />
              </div>
            </li>
            <li>
              <span>교통비</span>
              <span>1500</span>
              <div>
                <MdEdit />
                <MdDeleteForever />
              </div>
            </li>
          </ul>
          <button>
            목록 지우기 <MdDeleteForever />
          </button>
        </div>
      </main>
      <footer>
        <h2>총 지출: 900원</h2>
      </footer>
    </>
  );
}
