import React from "react";
import { NavLink } from "react-router-dom"; /*
import { AuthContext } from "../../../context/AuthContext";*/
import classes from "./Navbar.module.css";

export const Navbar = () => {
  /*const history = useHistory();
  const auth = useContext(AuthContext);
  
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };*/

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
            <NavLink to="/login">Авторизация</NavLink>
            <NavLink to="/register">Регистрация</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
