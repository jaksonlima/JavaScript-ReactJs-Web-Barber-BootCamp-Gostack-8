import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routers from "./routes/index";
import "./config/ReactotronConfig";

export default function App() {
  return (
    <Router>
      <Routers />
    </Router>
  );
}
