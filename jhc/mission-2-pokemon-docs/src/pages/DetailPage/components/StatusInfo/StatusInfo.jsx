import { handleFirstCharUpper } from "../../../../hooks/common/handleFirstCharUpper";
import style from "./StatusInfo.module.css";

export const StatusInfo = ({ baseColor, stats }) => {
  //   console.log(stats[0].stat.name);
  const handleWidth = (stat) => {
    console.log((stat / 255) * 100);
    return Math.floor((stat / 255) * 100) + "%";
  };

  return (
    <div className={style.statusArea}>
      <h2 style={{ color: baseColor }}>기본 능력치</h2>

      {stats.map((item, index) => (
        <div className={style.statusWrap} key={index}>
          <h3>{handleFirstCharUpper(item.stat.name)}</h3>
          <div className={style.statusRateWrap}>
            <h3>{item.base_stat}</h3>
            <div className={style.statusRateBarWrap}>
              <div
                className={style.statusRateBar}
                style={{
                  width: handleWidth(item.base_stat),
                  backgroundColor: baseColor,
                }}
              ></div>
            </div>
            <h3>255</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
