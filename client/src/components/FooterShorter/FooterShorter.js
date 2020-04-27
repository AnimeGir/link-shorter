import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./FooterShorter.module.css";

import { Shorter } from "../TopSlide/Shorter/Shorter";

export const FooterShorter = () => {
  return (
    <section className={classes.footer_shorter}>
      <div className={classes.container}>
        <h2>Длинный URL теперь не проблема!</h2>
        <span>
          Musii сократит длинную ссылку за долю секунды. Введите длинный URL в
          поле ввода и нажмите сократить. Готово!
        </span>
        <Shorter />
        <div className={classes.register}>
          <p>
            Зарегистрируйтесь, чтобы попробовать все функции нашего сервиса!
          </p>
          <NavLink to="/register">Регистрация</NavLink>
        </div>
      </div>
    </section>
  );
};
