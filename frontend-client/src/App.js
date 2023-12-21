// App.js

import { Grommet } from "grommet";
import { colors } from "grommet/themes/base";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlayerHome from "./Components/PlayerHome/PlayerHome";
import SeasonHome from "./Components/SeasonHome/SeasonHome";

function App() {
  const customTheme = {
    global: {
    },

    tab: {
      color: "placeholder", // default tab color
      border: {
        side: "bottom",
        color: "transparent",
      },
      active: {
        color: "text.dark",
        border: {
          side: "bottom",
          color: "brand",
        },
      },
      hover: {
        color: "text.light",
        border: {
          side: "bottom",
          color: "transparent",
        },
      },
    },

    dataTable: {

      body: {
        background: ["light-2", "white"],
        extend: {
          color: 'blue',
        },
      },

      header: {
        gap: "0px",
        font: {
          size: '10px', // Adjust the font size here
          weight: 'bold', // You can also adjust the font weight if needed
        },
        background: {
          color: 'white', // Set the background color here
        },
      },

    },
  };

  // ... (other DataTable settings)


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
