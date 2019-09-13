import React from "react";
import Admin from "./Admin";
import Present from "./Present";

const App = () => {
  let url = new URLSearchParams(window.location.search);

  if(url.get("view") === "present"){
    return <Present />
  }
  return <Admin />
}

export default App;
