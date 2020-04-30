import React from "react";
import { Link } from "react-router-dom";
import { useHttp } from "../../hooks/http.hook";
import { Shorter } from "../TopSlide/Shorter/Shorter";
import cogoToast from "cogo-toast";

import classes from "./LinksList.module.css";

export const LinksList = ({ links }) => {
  const { request } = useHttp();

  const deleteHandle = async (object) => {
    try {
      const { code } = object;
      await request("/api/link/delete", "POST", { code });
    } catch (e) {}
  };

  const copyHandle = async (object) => {
    try {
      const { to } = object;
      navigator.clipboard
        .writeText(to)
        .then(() => {
          cogoToast.success("Ссылка скопирова в буфер обмена!");
        })
        .catch((err) => {
          cogoToast.error("Что-то пошло не так");
        });
    } catch (e) {}
  };

  if (!links.length) {
    return <p className={classes.center}>Ссылок пока нет</p>;
  }
  return (
    <section className={classes.links_list}>
      <div className={classes.links_top_slide}>
        <div className={classes.container}>
          <Shorter />
          <div className={classes.total_links}>
            <h1>Всего ссылок: {links.length}</h1>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.cards}>
          {links.map((link, index) => {
            return (
              <div className={classes.card} key={link._id}>
                <div className={classes.card_container}>
                  <h2 className={classes.header_link}>
                    <a
                      className={classes.color_black}
                      href={link.from}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.from}
                    </a>
                  </h2>
                  <p className={classes.date}>
                    {new Date(link.date).toLocaleDateString()}
                  </p>
                  <div className={classes.short_link}>
                    <p id="copy">
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.to}
                      </a>
                    </p>
                    <button
                      className={classes.copy}
                      onClick={() => copyHandle(link)}
                    >
                      Копировать
                    </button>
                  </div>
                  <div className={classes.button_container}>
                    <button className={classes.more_button}>
                      <Link to={`/detail/${link._id}`}>Подробнее</Link>
                    </button>
                    <button
                      className={classes.delete_button}
                      onClick={() => deleteHandle(link)}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/*
 <table>
          <thead>
            <tr>
              <td>№</td>
              <th>Оригинальная</th>
              <th>Сокращенная</th>
              <th>Открыть</th>
            </tr>
          </thead>

          <tbody>
            {links.map((link, index) => {
              return (
                <tr key={link._id}>
                  <td>{index + 1}</td>
                  <td>{link.from}</td>
                  <td>{link.to}</td>
                  <td>
                    <Link to={`/detail/${link._id}`}>Открыть</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
*/
