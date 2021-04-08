import React from "react";
import FooterComponent from "./footerComponent";
import HeaderComponent from "./headerComponent";
import MainComponent from "./mainComponent";

export default function AppComponent() {
  return (
    <div>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
}
