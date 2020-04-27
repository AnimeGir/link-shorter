import React from "react";
import { Link } from "react-router-dom";
import classes from "./ThirdSlide.module.css";

export const ThirdSlide = () => {
  return (
    <section className={classes.third_slide}>
      <div className={classes.slide_container}>
        <div className={classes.triangle_block}>03</div>
        <div className={classes.main_text_area}>
          <div className={classes.one_block}>
            <span className={classes.head}>Аналитика</span>
            <h2>Наши ссылки знают многое</h2>
            <p className={classes.l_text}>
              Все Ваши ссылки будут получать подробную статистику по количеству
              переходов и наглядные графики для анализирования эффективности.
            </p>
            <ul>
              <li>Переходы по кликам</li>
              <li>Аналитика в реальном времени </li>
              <li>Информативные графики</li>
              <li>Боты не включаются в статистику</li>
            </ul>
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
                <p className={classes.text}>Перейти</p>
              </button>
            </Link>
          </div>
          <div className={classes.two_block}>
            <img src="../../../img/cccc.png" alt="a" />
          </div>
        </div>
      </div>
    </section>
  );
};
