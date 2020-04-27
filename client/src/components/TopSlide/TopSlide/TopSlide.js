import React from "react";
import classes from "./TopSlide.module.css";
import { Shorter } from "../Shorter/Shorter";

export const TopSlide = () => {
  return (
    <section className={classes.top_slide}>
      <div className={classes.top_container}>
        <h1>Сокращение URL и ссылок</h1>
        <span>Упростите свои ссылки и отслеживайте статистику переходов</span>
        <Shorter />
        <p>
          Пользуясь услугами нашего сервиса, вы принимаете Условия эксплуатации
          и политики конфиденциальности
        </p>
      </div>
    </section>
  );
};
