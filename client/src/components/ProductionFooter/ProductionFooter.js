import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProductionFooter.module.css";

export const ProductionFooter = () => {
  return (
    <section className={classes.production}>
      <div className={classes.container}>
        <div className={classes.content}>
          © 2020 musii.li | Разработано
          <Link to="#">ATeam</Link>
        </div>
      </div>
    </section>
  );
};
