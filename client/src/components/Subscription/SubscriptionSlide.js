import React, { useState } from "react";
import classes from "./SubscriptionSlide.module.css";
import cogoToast from "cogo-toast";
import { useHttp } from "../../hooks/http.hook";

export const SubscriptionSlide = () => {
  const [email, setEmail] = useState("");
  const { request } = useHttp();

  const submitHandle = async (event) => {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const address = email;
    if (!reg.test(address)) {
      cogoToast.warn("Повторите попытку");
    } else {
      try {
        console.log(email);
        await request("/mail/send", "POST", { email });
        cogoToast.success("OK");
      } catch (e) {
        console.log(e.message);
        cogoToast.warn("Повторите попытку");
      }
    }

    event.preventDefault();
  };

  return (
    <section className={classes.subscription}>
      <div className={classes.container}>
        <h2>Не оставайся в стороне, подписывайся на нашу рассылку</h2>
        <span className={classes.l_text}>
          Подпишись на нашу рассылку и будьте в курсе новостей и полезной
          информации о работе сервиса.
        </span>
        <form onSubmit={submitHandle}>
          <div className={classes.subscribe}>
            <div className={classes.inputs}>
              <input
                type="text"
                placeholder="Введите ваш адрес электронной почты"
                className={classes.inp}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={classes.sub}>
                <p>
                  <label>
                    <span className={classes.check}>
                      Подписываясь на рассылку вы соглашаетесь на обработку
                      песональных данных (email адрес)
                    </span>
                  </label>
                </p>
              </div>
            </div>
            <input
              className={classes.button_submit}
              type="submit"
              value="Отправить"
            />
          </div>
        </form>
      </div>
    </section>
  );
};
