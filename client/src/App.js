import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import { Navbar } from "./components/Header/Navbar/Navbar";
import { NavbarAuth } from "./components/Header/NavbarAuth/NavbarAuth";
import { Loader } from "./components/Loader";

function App() {
  const { token, login, logout, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader />;
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <NavbarAuth />;
    }
    return <Navbar />;
  }
  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
      }}
    >
      <Router>
        {<Greeting isLoggedIn={isAuthenticated} />}
        {routes}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
