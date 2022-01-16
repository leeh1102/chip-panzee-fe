import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";

export default function Header() {
  const displayDesktop = () => {
    return <Toolbar id="title" >
        <img class="Logo" src = "./assets/headerlogo.png"></img>
    </Toolbar>;
  };
  
  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}