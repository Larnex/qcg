import React from "react";
import s from "./TopPage.module.scss";

const TopPage = (props: any) => {
  return (
    <div className={s.container}>
      <h1 className={props.background ? s.whiteText : undefined}>
        {props.text}
      </h1>
      <img src={props.img} alt="logo" />
    </div>
  );
};

export default TopPage;
