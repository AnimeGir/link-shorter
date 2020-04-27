import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import classes from "./NavbarAuth.module.css";

export const NavbarAuth = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };

  return (
    <header>
      <div className={classes.header__container}>
        <div className={classes.container}>
          <div className={classes.logo}>
            <NavLink to="/">
              <img src="../../../../img/Musii.svg" alt="logo" />
            </NavLink>
          </div>
          <div className={classes.buttons}>
            <NavLink to="/links">Мои ссылки</NavLink>
            <button onClick={logoutHandler}>Выйти</button>
          </div>
        </div>
      </div>
    </header>
  );
};
