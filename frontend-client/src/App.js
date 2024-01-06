// App.js

import { Grommet } from "grommet";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SeasonHome from "./Components/SeasonHome/SeasonHome";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import TeamHome from "./Components/TeamHome/TeamHome.js";


const theme = createTheme({
  fontFamily: 'Verdana, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Greycliff CF, sans-serif' },
});


function App() {


  // ... (other DataTable settings)


  return (
    <>
      <MantineProvider theme={theme}>
        <Grommet >
          <Router>
            <Routes>
              <Route path="/" element={<SeasonHome />} />
              <Route path="/Team/:teamId" element={<TeamHome />} />
            </Routes>
          </Router>
        </Grommet>
      </MantineProvider>
    </>
  );
}

export default App;
