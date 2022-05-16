import React from "react";
import s from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={s.container} id="contact">
      <div className={s.background}></div>
      <div className={s.inner_container}>
        <div className={s.content__container}>
          <h2>Contact Information:</h2>

          <div className={s.contact__name}>
            <h3>Sebastian Zimnol</h3>

            <p>
              Mail: <a href="mailto:s.zimnol@qche.ngo">s.zimnol@qche.ngo</a>
            </p>
            <p>Mob.: +49 / 151 / 1265 9437</p>
          </div>
          <div className={s.contact__address}>
            <h3>Quantum Cybersecurity Group sp. z o.o.</h3>
            <p>ul. Lęborska 3b</p>
            <p>80-386 Gdańsk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
