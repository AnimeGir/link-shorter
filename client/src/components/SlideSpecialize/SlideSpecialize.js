import React from "react";
import classes from "./SlideSpecialize.module.css";
import { Cards } from "./Cards/Cards";

export const SlideSpecialize = () => {
  return (
    <section className={classes.specialize}>
      <div className={classes.specialize_container}>
        <h2>
          Бесплатное сокращение URL и ссылок, с возможностью создания своих URL
        </h2>
        <span className={classes.cutt}>
          Musii.li позволяет вам больше узнать о переходе по ссылкам. Мы
          предоставляем вам огромный маркетинговый инструмент с расширенной
          системой отслеживания URL-адресов бесплатно без каких-либо скрытых
          обязательств. Зачем? Потому что мы считаем, что лучшие вещи должны
          быть свободными.
        </span>
        <Cards />
      </div>
    </section>
  );
};
