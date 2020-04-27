import React from "react";
import { Link } from "react-router-dom";

import classes from "./LinkCard.module.css";

import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from "recharts";

export const LinkCard = ({ link }) => {
  const data = [
    { date: "26.04.20", clicks: link.clicks },
    { name: "27.04.20", clicks: link.clicks },
    { name: "28.04.20", clicks: link.clicks },
    { name: "29.04.20", clicks: link.clicks },
    { name: "30.04.20", clicks: link.clicks },
  ];

  return (
    <>
      <div className={classes.link_section}>
        <div className={classes.link_container}>
          <LineChart
            width={600}
            height={300}
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line
              type="monotone"
              dataKey="clicks"
              stroke="#ff7300"
              yAxisId={0}
            />
          </LineChart>
          <h2>Информация по ссылке</h2>
          <p className={classes.count}>
            Количество переходов: <strong>{link.clicks}</strong>
          </p>
          <p>
            Полученная ссылка:{" "}
            <Link to={link.to} target="_blank" rel="noopener noreferrer">
              {link.to}
            </Link>
          </p>
          <p>
            Начальная ссылка:{" "}
            <Link to={link.from} target="_blank" rel="noopener noreferrer">
              {link.from}
            </Link>
          </p>
          <span>
            Дата создания:{" "}
            <strong>{new Date(link.date).toLocaleDateString()}</strong>
          </span>
          <Link to="/links">
            <button className={classes.back_button}>Вернуться</button>
          </Link>
        </div>
      </div>
    </>
  );
};
