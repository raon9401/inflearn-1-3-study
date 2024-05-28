import { useNavigate } from "react-router-dom";
import { COLORS } from "../../../../const/color";
import { handleApiState } from "../../../../hooks/common/handleApiState";
import { usePokemonCard } from "../../../../hooks/usePokemonList";
import style from "./Card.module.css";

export const Card = ({ item }) => {
  const navigate = useNavigate();

  const urlId = (item) => {
    const parts = item.split("/");
    return parts[parts.length - 2]; // 마지막 슬래시 뒤의 부분이 숫자이므로 그 앞의 요소를 가져옴
  };

  //   console.log(urlId(item.url));
  const { data, isLoading, isError, error } = usePokemonCard({
    id: urlId(item.url),
  });
  handleApiState(isLoading, isError, error);

  console.log(data);
  //   console.log(data?.types[0].type.name);

  return (
    <div
      className={style.cardArea}
      onClick={() => navigate(`/detail/${data?.id}`)}
    >
      <div className={style.cardBox}>
        <div
          className={style.cardId}
          style={{ color: COLORS[data?.types[0].type.name] }}
        >
          <span>#{data?.id}</span>
        </div>
        <img
          className={style.cardImg}
          src={data?.sprites.other["official-artwork"].front_default}
        />
      </div>
      <div
        className={style.cardName}
        style={{ backgroundColor: COLORS[data?.types[0].type.name] }}
      >
        {item?.name.toUpperCase()}
      </div>
    </div>
  );
};
