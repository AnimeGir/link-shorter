import React, { useContext, useState } from "react";

import { useHttp } from "../../../hooks/http.hook";
import { AuthContext } from "../../../context/AuthContext";
import { useHistory } from "react-router-dom";

import classes from "./Shorter.module.css";
import cogoToast from "cogo-toast";

export const Shorter = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [link, setLink] = useState("");

  const pressHandler = async () => {
    try {
      const data = await request(
        "/api/link/generate",
        "POST",
        { from: link },
        {
          Authorization: `Bearer ${auth.token}`,
        }
      );
      history.push(`/detail/${data.link._id}`);
      cogoToast.info("Ссылка сокращена");
    } catch (e) {
      cogoToast.warn("Для сокращения ссылок необходимо зарегестрироваться");
    }
  };

  return (
    <div className={classes.container_shorter}>
      <input
        type="text"
        placeholder="Вставьте длинный URL-адрес и укоротите его"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        onKeyPress={pressHandler}
      />
      <button className={classes.shortenit_b} onClick={pressHandler}>
        Сократить
      </button>
    </div>
  );
};
