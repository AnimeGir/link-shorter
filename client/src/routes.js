import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LinksPage } from "./pages/LinksPage";
import { CreatePage } from "./pages/CreatePage";
import { DetailPage } from "./pages/DetailPage";

import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";

import { RulesPage } from "./pages/RulesPage";

import { PolicyPage } from "./pages/PolicyPage";
import { AboutPage } from "./pages/AboutPage";
import { SupportPage } from "./pages/SupportPage";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/links" exact>
          <LinksPage />
        </Route>
        <Route path="/login" exact>
          <RegisterPage />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
        </Route>

        <Route path="/rules" exact>
          <RulesPage />
        </Route>
        <Route path="/policy" exact>
          <PolicyPage />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="/support" exact>
          <SupportPage />
        </Route>
        <Route path="/" exact>
          <CreatePage />
        </Route>
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <CreatePage />
      </Route>
      <Route path="/register" exact>
        <RegisterPage />
      </Route>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
      <Route path="/rules" exact>
        <RulesPage />
      </Route>
      <Route path="/policy" exact>
        <PolicyPage />
      </Route>
      <Route path="/about" exact>
        <AboutPage />
      </Route>
      <Route path="/support" exact>
        <SupportPage />
      </Route>
      <Route path="/links" exact>
        <LinksPage />
      </Route>
      <Route path="/detail/:id">
        <DetailPage />
      </Route>

      <Redirect to="/" />
    </Switch>
  );
};
