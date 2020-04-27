import React, { useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";

import classes from "../styles/login.module.css";
import cogoToast from "cogo-toast";
import { Redirect } from "react-router-dom";

export const LoginPage = () => {
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
  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
      cogoToast.success("Вход выполнен");
    } catch (e) {
      cogoToast.error("Повторите попытку");
    }
  };
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  if (auth.isAuthenticated === true) return <Redirect to="/" />;
  return (
    <section className={classes.register}>
      <div className={classes.container}>
        <div className={classes.wrap_login100}>
          <form className={classes.login100_form}>
            <span className={classes.login100_form_title}>Вход</span>

            <span className={classes.input_title}>Email</span>
            <div
              className={classes.wrap_input100}
              data-validate="Username is required"
            >
              <input
                className={classes.input100}
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
              <span className={classes.btn_show_pass}></span>
              <input
                className={classes.input100}
                type="password"
                name="password"
                value={form.password}
                onChange={changeHandler}
              />
              <span className={classes.focus_input100}></span>
            </div>

            <div className={classes.container_login100_form_btn}>
              <button
                className={classes.login100_form_btn}
                onClick={loginHandler}
                disabled={loading}
              >
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
