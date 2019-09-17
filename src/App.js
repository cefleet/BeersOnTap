import React, { useState, useEffect } from "react";
import Admin from "./Admin";
import Present from "./Present";

import { TapsContextProvider } from "./context/TapsContext";
import { BeersContextProvider } from "./context/BeersContext";
import { OnDeckContextProvider } from './context/OnDeckContext';

const App = ({ view }) => {
  return (
    <TapsContextProvider view={view}>
      <BeersContextProvider view={view}>
        <OnDeckContextProvider view={view}>
          {view === "present" && <Present />}
          {view === "admin" && <Admin />}
        </OnDeckContextProvider>
      </BeersContextProvider>
    </TapsContextProvider>)
}

export default App;
