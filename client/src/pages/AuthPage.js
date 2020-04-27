import React, { useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";

import classes from "../styles/login.module.css";

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  /*useEffect(() => {
    window.M.updateTextFields()
  }, [])*/

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <section className={classes.register}>
      <div className={classes.container}>
        <div className={classes.wrap_login100}>
          <form className={classes.login100_form}>
            <span className={classes.login100_form_title}>Регистрация</span>

            <span className={classes.input_title}>Email</span>
            <div
              className={classes.wrap_input100}
              data-validate="Username is required"
            >
              <input
                className={classes.input100}
                placeholder="Введите email"
                type="text"
                name="email"
                value={form.email}
                onChange={changeHandler}
              />
              <span className={classes.focus_input100}></span>
            </div>

            <span className={classes.input_title}>Пароль</span>
            <div
              className={classes.wrap_input100}
              data-validate="Password is required"
            >
              <span className={classes.btn_show_pass}>
                <i class="fa fa-eye"></i>
              </span>
              <input
                className={classes.input100}
                type="password"
                name="password"
                value={form.password}
                onChange={changeHandler}
              />
              <span className={classes.focus_input100}></span>
            </div>

            <div className={classes.fetch}>
              <div className={classes.contact100_form_checkbox}>
                <input
                  className={classes.input_checkbox100}
                  id="ckb1"
                  type="checkbox"
                  name="remember_me"
                />
                <label className={classes.label_checkbox100} for="ckb1">
                  Запомнить меня
                </label>
              </div>

              <div>
                <a href="#" className="txt3">
                  Забыли пароль?
                </a>
              </div>
            </div>

            <div className={classes.container_login100_form_btn}>
              <button
                className={classes.login100_form_btn}
                onClick={loginHandler}
                disabled={loading}
              >
                Зарегистрироваться
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
