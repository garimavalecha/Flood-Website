import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/home";
function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
