import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Grommet } from "grommet";
import LoginPage from "./Components/LoginPage";
import PlayerHome from "./Components/PlayerHome/PlayerHome";
import SeasonHome from "./Components/SeasonHome/SeasonHome";
import TeamHome from "./Components/TeamHome/TeamHome";
import CrudBar from "./Components/Crud/CrudBar";
import CrudPage from "./Components/Crud/CrudPage";

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
          <CrudBar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/SeasonHome" element={<SeasonHome />} />
            <Route path="/TeamHome/:team_id" element={<TeamHome />} />
            <Route path="/PlayerHome/:player_id" element={<PlayerHome />} />
            <Route path= "/CrudPage/:label/:option" element = {<CrudPage />} />
          </Routes>
        </Router>
      </Grommet>
    </>
  );
}

export default App;
