// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import { DataTableExample } from "./Components/DataTableExample";
import PlayerHome from "./Components/PlayerHome/PlayerHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" element={<DataTableExample />} />
        <Route
          path="/PlayerHome"
          // pass the player stats here
          element={<PlayerHome stats={"../../jsons/career_stats.json"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
