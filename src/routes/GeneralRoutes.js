import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { NavBar } from "../templates/NavBar";
import { Footer } from "../templates/Footer";
import { Dashboard } from "../pages/dashboard/Dashboard";
import "../App.css";
import { About } from "../pages/about/About";
import { Contact } from "../pages/contact/contact";
import { Gallery } from "../pages/gallery/gallery";
export const GeneralRoutes = () => {
  return (
    <>
      <div>
        <NavBar />
        <Switch>
          <Route path="/home" component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/gallery" component={Gallery} />

          <Redirect from="/" to={"/home"} />
        </Switch>
        <Footer />
      </div>
    </>
  );
};
