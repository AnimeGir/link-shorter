import React from "react";
import { Link } from "react-router-dom";
import classes from "./OneSlide.module.css";

export const OneSlide = () => {
  return (
    <section className={classes.one_slide}>
      <div className={classes.slide_container}>
        <div className={classes.triangle_block}>01</div>
        <div className={classes.main_text_area}>
          <div className={classes.one_block}>
            <span className={classes.head}>Сокращение URL и ссылок</span>
            <h2>Musii - Сокращение URL и их отслеживание</h2>
            <p className={classes.l_text}>
              Удобный для пользователя змеевик ссылок со многими функциями и
              подробной аналитикой в реальном времени. Наши короткие ссылки
              знают, как, когда и где кто-то нажал или коснулся ваших
              сокращенных ссылок и даже больше.
            </p>
            <Link to="/register">
              <button>
                <img
                  src="../../../img/icon-linkk.svg"
                  alt=""
                  className={classes.link_icon}
                />
                <img
                  src="../../../img/linee.svg"
                  alt=""
                  className={classes.arrows}
                />

                <p className={classes.text}>Сократить</p>
              </button>
            </Link>
          </div>
          <div className={classes.two_block}>
            <img src="../../../img/linkk.png" alt="a" />
          </div>
        </div>
      </div>
    </section>
  );
};
