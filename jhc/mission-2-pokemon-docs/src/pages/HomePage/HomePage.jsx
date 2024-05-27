import { useEffect, useState } from "react";
import { usePokemonList } from "../../hooks/usePokemonList";
import { handleApiState } from "../../hooks/common/handleApiState";
import CardList from "./components/CardList/CardList";
import style from "./HomePage.module.css";
import SearchInput from "./components/SearchInput/SearchInput";

export const HomePage = () => {
  // 40개씩 증가
  const [offset, setOffset] = useState(0);
  const [dataList, setDataList] = useState([]);

  const { data, isSuccess, isLoading, isError, error } = usePokemonList({
    offset,
  });
  handleApiState(isLoading, isError, error);

  const handleMoreContents = () => {
    setOffset(offset + 40);
  };

  useEffect(() => {
    if (Array.isArray(data?.results) && isSuccess) {
      setDataList([...dataList, ...data.results]);
    }
  }, [isSuccess]);

  return (
    <>
      <SearchInput />
      <div className={style.listWrap}>
        {dataList && <CardList data={dataList} />}
        <button className={style.listMoreButton} onClick={handleMoreContents}>
          더 보기
        </button>
      </div>
    </>
  );
};
