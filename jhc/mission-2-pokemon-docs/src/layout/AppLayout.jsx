import { Outlet } from "react-router-dom";
import style from "./AppLayout.module.css";

export const AppLayout = () => {
  return (
    <>
      <div className={style.navBox}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
          alt="logo"
        />
      </div>

      <Outlet />
    </>
  );
};
