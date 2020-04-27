import React from "react";
import { Link } from "react-router-dom";
import classes from "./TwoSlide.module.css";

export const TwoSlide = () => {
  return (
    <section className={classes.two_slide}>
      <div className={classes.slide_container}>
        <div className={classes.triangle_block}>02</div>
        <div className={classes.main_text_area}>
          <div className={classes.one_block}>
            <img src="../../../img/graf.svg" alt="a" />
          </div>
          <div className={classes.two_block}>
            <span className={classes.head}>Оптимизация ссылок</span>
            <h2>Оптимизация ссылок</h2>
            <p className={classes.l_text}>
              Musii - это платформа управления сссылками и сокращения
              URL-адреса, который дает Вам много новых возможностей.
            </p>
            <ul>
              <li>Бесплатное и быстрое сокращение URL-адресов</li>
              <li>Фирменные URL-адреса</li>
              <li>Приявязка ссылок</li>
              <li>Пользовательский псевдоним сокращенного URL-адреса</li>
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

                <p className={classes.text}>оптимизировать</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
