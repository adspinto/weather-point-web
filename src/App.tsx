import React from "react";
import AppContext from "@config/context";
import "./App.css";
import Router from "@routes/Router";

function App() {
  return (
    <AppContext.Provider value={{}}>
      <Router />
    </AppContext.Provider>
  );
}

export default App;
