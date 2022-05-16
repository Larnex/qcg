import React from "react";
import s from "./Vision.module.scss";
import logo from "../../assets/logo/logo_yellow.png";
import TopPage from "../common/TopPage";

const Vision = () => {
  let blackBackground = true;

  return (
    <div className={s.container} id="vision">
      <div className={s.background}></div>
      <div className="inner_container">
        <TopPage
          text="Vision"
          img={logo}
          background={blackBackground}
        ></TopPage>

        <div className={s.bg_yellow}>
          <h3>“At QCG, we make quantum crypto secure and inexpensive!”</h3>
        </div>

        <div className={s.bg_transparent_black}>
          <p>
            We make it secure by using device-independent (DI) cryptography,
            which security is checked constantly in real-time and depends only
            on output statistics.
            <br />
            <br />
            It does not (as the name suggests) depend in any way on the
            implementation and therefore is secure against all
            implementation-level attacks.
            <br />
            <br />
            Therefore we will generate an entirely new level of security for
            business- critical networks, especially in Critical National
            Infrastructure sector
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
