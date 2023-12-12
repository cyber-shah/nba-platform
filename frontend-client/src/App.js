// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import PlayerHome from "./Components/PlayerHome/PlayerHome";
import TeamHome from "./Components/SeasonHome/SeasonHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<TeamHome />} />
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
