import React, { useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { useMessage } from "../hooks/message.hook";
import { Redirect } from "react-router-dom";

import cogoToast from "cogo-toast";

import classes from "../styles/login.module.css";

export const RegisterPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    clearError();
  }, [error, message, clearError]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      cogoToast.info(data.message);
    } catch (e) {
      cogoToast.error("Такой пользователь уже существует");
    }
  };
  if (auth.isAuthenticated === true) return <Redirect to="/" />;
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
                onClick={registerHandler}
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
