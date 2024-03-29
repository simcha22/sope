import React from "react";
import FooterComponent from "./footerComponent";
import HeaderComponent from "./headerComponent";
import MainComponent from "./mainComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "../pagesComponent/homeComponent";
import AboutComponent from "../pagesComponent/aboutComponent";
import LessonMainComponent from "../lessonsComponent/lessonMainComponent";
import SignupComponent from "../pagesComponent/signupComponent";
import LoginComponent from "../pagesComponent/loginComponent";
import LessonsByCategory from "../lessonsComponent/lessonsByCategory";
import LessonPage from "../lessonsComponent/lessonPage";

export default function AppComponent() {
  return (
    <Router>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={MainComponent} />
        <Route exact path="/home" component={HomeComponent} />
        <Route exact path="/about" component={AboutComponent} />
        <Route exact path="/lessons" component={LessonMainComponent} />
        <Route exact path="/lessons/:cat" component={LessonsByCategory}/>
        <Route exact path="/signup" component={SignupComponent} />
        <Route exact path="/login" component={LoginComponent} />
        <Route exact path="/lesson/:name" component={LessonPage}/>
      </Switch>
      <FooterComponent />
    </Router>
  );
}
