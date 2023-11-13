import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from './components/LoginPage';
import { Home } from './components/Home';
import{ ChartApp } from './components/Calender.tsx';
import Example from './components/Example.tsx';
import Radar from './components/Radar.tsx';
import Rechart from './components/Recharts.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/example" element={<ChartApp />} />
          <Route path="/example1" element={<Example width={500} height={500}/>} />
          <Route path="/Rechart" element={<Rechart/>} />
          <Route path="/example2" element={<Radar width={500} height={500} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
