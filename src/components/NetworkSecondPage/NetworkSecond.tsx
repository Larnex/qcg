import React from "react";
import s from "./NetworkSecond.module.scss";
import logo from "../../assets/logo/logo_yellow.png";
import TopPage from "../common/TopPage";
import waveBG from "../../assets/elements/wave_yellow.png";

const Vision = () => {
  let blackBackground = true;

  return (
    <div className={s.container}>
      <div className={s.background}></div>
      <div className="inner_container">
        <TopPage
          text="Network Of Security"
          img={logo}
          background={blackBackground}
        ></TopPage>

        <div className={s.bg_transparent_black}>
          <ul>
            <li>
              <p className={s.subtitle}>
                <strong> Option 1.</strong>
              </p>
              <p className={s.text}>
                Users <strong> do not need</strong> to trust the hubs. So even
                if you think that the provider of the hubs wants to eavesdrop on
                you, there is proof that he cannot.
              </p>
            </li>
            <li>
              <p className={s.subtitle}>
                <strong> Option 2.</strong>
              </p>
              <p className={s.text}>
                Hubs <strong>can eavesdrop</strong> on the users. This solution
                makes sense if users and hubs are parts of{" "}
                <strong>the same</strong>
                organization. This option has better key generation rates and a
                <strong>larger maximum distance.</strong> (probably between{" "}
                <strong>100-150</strong> km).
              </p>
            </li>
            <li>
              <p className={s.subtitle}>
                <strong> Option 3.</strong>
              </p>
              <p className={s.text}>
                Users do not need to trust the hubs, and the hubs use{" "}
                <strong>quantum memory.</strong> This allows the users to be
                even <strong>200-250</strong> km from the hub, but the key
                generation rates are <strong>abysmal</strong> – probably less
                than <strong>1Hz</strong>.
              </p>
            </li>
          </ul>

          {/* <p className={s.subtitle}>Option 1.</p>
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
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Vision;
