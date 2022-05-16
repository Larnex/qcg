import React from "react";
import TopPage from "../common/TopPage";
import s from "./Goals.module.scss";
import logo from "../../assets/logo/logo_black.png";

const Goals = () => {
  let blackBackground = false;

  return (
    <div className={s.container} id="goals">
      <div className={s.background}></div>
      <div className="inner_container">
        <TopPage text="Goals" img={logo} background={blackBackground}></TopPage>

        <div className={s.bg_yellow}>
          <p>
            Quantum cryptography is impossible without specialized hardware for
            both communicating parties. They need to send photons from one to
            the other, so they need either to have a line of sight (as in the
            case of satellite and ground station) or a fiber optical link.
          </p>
        </div>

        <div className={s.bg_transparent_black}>
          <p>
            Based on this, we come up with an easy – theoretically already
            proven – way of doing DI crypto, which makes it affordable and
            increases distance and communication. Focus is generating{" "}
            <strong>keys at 1MHz by covering distances of 100 km.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Goals;
