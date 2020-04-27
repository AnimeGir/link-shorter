import React from "react";

import classes from "./MineSlideSupport.module.css";

export const MineSlideSupport = () => {
  return (
    <section className={classes.main_slide}>
      <div className={classes.container}>
        <div className={classes.form_container}>
          <form id="data" className={classes.support_form}>
            <p>
              <input type="text" name="input" placeholder="Ваше имя" />
            </p>
            <p>
              <input type="text" name="input" placeholder="Введите email" />
            </p>
            <p>
              <textarea placeholder="Ваше сообщение ... "></textarea>
            </p>
          </form>
          <p>
            <button type="submit" form="data">
              Отправить форму
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
