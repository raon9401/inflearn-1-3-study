import style from "./SearchInput.module.css";

const SearchInput = () => {
  return (
    <div className={style.searchArea}>
      <div className={style.searchBox}>
        <input className={style.inputBox}></input>
        <button className={style.searchButton}>검색</button>
      </div>
    </div>
  );
};

export default SearchInput;
