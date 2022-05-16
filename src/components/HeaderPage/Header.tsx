import React from "react";
import s from "./Header.module.scss";
import logo from "../../assets/logo/logo_yellow_text_white.png";

const Header = () => {
  return (
    <div className={s.container} id="home">
      <div className={s.container__image}>
        <img src={logo} alt="" />
      </div>
      <div className={s.container__text}>
        <h1 className={s.title}>The future is secure!</h1>
      </div>
    </div>
  );
};

export default Header;
