import React from "react";
import s from "./Network.module.scss";
import logo from "../../assets/logo/logo_black.png";
import TopPage from "../common/TopPage";
import illustration from "../../assets/elements/rounds.png";

const Network = () => {
  const blackBackground = false;

  return (
    <div className={s.container} id="network">
      <div className="inner_container">
        <TopPage
          text="Networks of Security"
          img={logo}
          background={blackBackground}
        ></TopPage>

        <div className={s.illustration_container}>
          <img
            src={illustration}
            alt="illustration"
            className={s.illustration}
          />
        </div>
      </div>
    </div>
  );
};

export default Network;
