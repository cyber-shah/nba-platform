// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlayerHome from "./Components/PlayerHome/PlayerHome";
import SeasonHome from "./Components/SeasonHome/SeasonHome";
import { Grommet } from "grommet";
import { colors } from "grommet/themes/base";

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
    colors: {
      brand: "#FF0000",
      placeholder: "#BDBDBD",
      text: {
        light: "#FFFFFF",
        dark: "#000000",
      },
    }
  };

  return (
    <>
      <Grommet theme={customTheme}>
        <Router>
          <Routes>
            <Route path="/SeasonHome" element={<SeasonHome />} />
            <Route path="/PlayerHome" element={<PlayerHome />} />
          </Routes>
        </Router>
      </Grommet>
    </>
  );
}

export default App;
