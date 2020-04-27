import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

export const Footer = () => {
  return (
    <section className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src="../../../../img/Musii.svg" alt="logo" />
          <p>musii.li, 2020</p>
        </div>
        <div className={classes.links}>
          <nav>
            <ul>
              <li>
                <Link to="/about">О сервисе</Link>
              </li>
              <li>
                <Link to="/rules">Правила пользования сервисом</Link>
              </li>
              <li>
                <Link to="/policy">Политика обработки персональных данных</Link>
              </li>
              <li>
                <Link to="/support">Обратная связь</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
