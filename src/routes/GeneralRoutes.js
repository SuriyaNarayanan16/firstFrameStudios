import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { NavBar } from "../templates/NavBar";
import { Footer } from "../templates/Footer";
import { Dashboard } from "../pages/dashboard/Dashboard";
import "../App.css";
export const GeneralRoutes = () => {
  return (
    <>
      <div>
        <NavBar />
        <Switch>
          <Route path="/home" component={Dashboard} />
          <Redirect from="/" to={"/home"} />
        </Switch>
        <Footer />
      </div>
    </>
  );
};
