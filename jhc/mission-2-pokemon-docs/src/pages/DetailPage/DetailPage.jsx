import { useNavigate, useParams } from "react-router-dom";
import style from "./DetailPage.module.css";
import { usePokemonCard } from "../../hooks/usePokemonList";
import { handleApiState } from "../../hooks/common/handleApiState";
import { COLORS } from "../../const/color";
import { FaArrowLeft } from "react-icons/fa";
import { SizeInfo } from "./components/SizeInfo/SizeInfo";
import { StatusInfo } from "./components/StatusInfo/StatusInfo";
import { handleFirstCharUpper } from "../../hooks/common/handleFirstCharUpper";

export const DetailPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { data, isLoading, isError, error } = usePokemonCard({
    id,
  });
  handleApiState(isLoading, isError, error);
  const baseColor = COLORS[data?.types[0].type.name];

  console.log(data);
  return (
    <>
      {data && (
        <div className={style.detailArea}>
          <div className={style.backgroundBox}>
            <div
              className={style.colorBox}
              style={{ backgroundColor: baseColor }}
            ></div>
            <div className={style.infoColorBox}></div>
          </div>
          <div className={style.infoBox}>
            <div className={style.baseInfoBox}>
              {/* 이름 */}
              <div className={style.nameBox} onClick={() => navigate("/")}>
                <FaArrowLeft color="white" />
                {handleFirstCharUpper(data?.name)}
              </div>
              <img
                className={style.baseImg}
                src={data?.sprites.other["official-artwork"].front_default}
              />
              <span>#{data?.id}</span>
            </div>
            <div className={style.detailInfo}>
              <span
                className={style.typeText}
                style={{ backgroundColor: baseColor }}
              >
                {handleFirstCharUpper(data.types[0].type.name)}
              </span>
              <SizeInfo
                id={id}
                baseColor={baseColor}
                weight={data.weight}
                height={data.height}
                abilities={data.abilities}
              />
              <StatusInfo baseColor={baseColor} stats={data.stats} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
