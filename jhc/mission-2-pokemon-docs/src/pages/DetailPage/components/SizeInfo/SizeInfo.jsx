import style from "./SizeInfo.module.css";
import { FaWeight } from "react-icons/fa";
import { LiaRulerVerticalSolid } from "react-icons/lia";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const SizeInfo = ({ id, baseColor, weight, height, abilities }) => {
  const navigate = useNavigate();

  const handleArrow = (movePage) => {
    let numId = Number(id);
    if (movePage === "prev" && id != 1) {
      navigate(`/detail/${numId - 1}`);
    } else if (movePage === "next" && id != 1008) {
      navigate(`/detail/${numId + 1}`);
    }
  };

  const handleWeight = (weight) => {
    return weight / 10;
  };

  const handleHeight = (height) => {
    return height / 10;
  };

  return (
    <>
      <div className={style.sizeInfo}>
        <h2 style={{ color: baseColor }}>정보</h2>
        <div className={style.infoArea}>
          <div className={style.infoWrap}>
            Weight
            <h2>
              <FaWeight />
              {handleWeight(weight)}Kg
            </h2>
          </div>
          <div className={style.infoWrap}>
            Height
            <h2>
              <LiaRulerVerticalSolid />
              {handleHeight(height)}m
            </h2>
          </div>
          <div className={style.infoWrap}>
            Ability
            <div className={style.abilityWrap}>
              {abilities?.map((item, index) => (
                <div key={index}>{item.ability.name}</div>
              ))}
            </div>
          </div>
        </div>
        <div className={style.pageMoveArrowArea}>
          <MdOutlineKeyboardArrowLeft
            size={50}
            className={style.arrowButton}
            onClick={() => handleArrow("prev")}
          />
          <MdOutlineKeyboardArrowRight
            size={50}
            className={style.arrowButton}
            onClick={() => handleArrow("next")}
          />
        </div>
      </div>
    </>
  );
};
