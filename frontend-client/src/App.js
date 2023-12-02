import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Grommet, Tabs, Tab } from "grommet";
import LoginPage from "./Components/LoginPage";
import PlayerHome from "./Components/PlayerHome/PlayerHome";
import SeasonHome from "./Components/SeasonHome/SeasonHome";
import TeamHome from "./Components/TeamHome/TeamHome";

function App() {
  const customTheme = {
    tab: {
      color: "placeholder", // default tab color
      border: {
        side: "bottom",
        color: "transparent",
      },
      active: {
        color: "black",
        border: {
          side: "bottom",
          color: "brand",
        },
      },
      hover: {
        color: "text-strong",
        border: {
          side: "bottom",
          color: "transparent",
        },
      },
    },
  };

  return (
    <>
      <Grommet theme={customTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/SeasonHome" element={<SeasonHome />} />
            <Route path="/TeamHome" element={<TeamHome />} />
            <Route
              path="/PlayerHome"
              element={<PlayerHome stats={"../../jsons/career_stats.json"} />}
            />
          </Routes>
        </Router>
      </Grommet>
    </>
  );
}

export default App;
