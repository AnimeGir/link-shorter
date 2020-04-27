import React from "react";
import { Link } from "react-router-dom";
import classes from "./Cards.module.css";

export const Cards = () => {
  return (
    <div className={classes.cards_container}>
      <div className={classes.card}>
        <div className={classes.card_container}>
          <div>
            <img src="../../../../img/icon-1.png" alt="icon"></img>
          </div>
          <span>Сокращение ссылок</span>
          <p>
            Бесплатно сокращение и настройка URL и ссылок с множеством функций.
            Сокращенные URL - адреса остаются вашими навсегда.
          </p>
          <Link to="/register">
            <button>Зарегистрироваться</button>
          </Link>
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.card_container}>
          <div>
            <img src="../../../../img/icon-2.png" alt="icon"></img>
          </div>
          <span>Сокращение ссылок</span>
          <p>
            Бесплатно сокращение и настройка URL и ссылок с множеством функций.
            Сокращенные URL - адреса остаются вашими навсегда.
          </p>
          <Link to="/register">
            <button>Зарегистрироваться</button>
          </Link>
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.card_container}>
          <div>
            <img src="../../../../img/icon-3.png" alt="icon"></img>
          </div>
          <span>Сокращение ссылок</span>
          <p>
            Бесплатно сокращение и настройка URL и ссылок с множеством функций.
            Сокращенные URL - адреса остаются вашими навсегда.
          </p>
          <Link to="/register">
            <button>Зарегистрироваться</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
