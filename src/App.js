import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from './components/LoginPage';
import { Home } from './components/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
