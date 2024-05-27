import { Card } from "../Card/Card";
import style from "./CardList.module.css";

const CardList = ({ data }) => {
  console.log(data);
  return (
    <div className={style.cardListWrap}>
      {data && data.map((item) => <Card key={item.url} item={item} />)}
    </div>
  );
};

export default CardList;
