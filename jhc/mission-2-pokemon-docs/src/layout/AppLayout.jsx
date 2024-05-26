import { Outlet } from "react-router-dom";
import style from "./AppLayout.module.css";

export const AppLayout = () => {
  return (
    <>
      <div className={style.navBox}>ddd</div>

      <Outlet />
    </>
  );
};
