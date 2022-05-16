import React from "react";
import TopPage from "../common/TopPage";
import s from "./Shop.module.scss";
import logo from "../../assets/logo/logo_black.png";

const Shop = () => {
  let blackBackground = false;

  return (
    <div className={s.container} id="shop">
      <div className={s.background}></div>
      <div className="inner_container">
        <TopPage
          text="One-Stop Shop for Security"
          img={logo}
          background={blackBackground}
        ></TopPage>

        <div className={s.text__container}>
          <p>
            With <strong>QCG</strong>, we can provide the{" "}
            <strong>future of quantum cyber security</strong>, including:
          </p>

          <ul className={s.list}>
            <li>specialized hardware</li>
            <li>algorithms</li>
            <li>network concept</li>
          </ul>
        </div>
        <div className={s.bg_yellow}>
          <p>
            Backed by the <strong>patents and forces</strong> of the leading
            quantum security Hub at the <strong>University of Gdansk</strong>,
            Poland.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
