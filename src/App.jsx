import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Forecast from "./pages/Forecast";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/forecast" element={<Forecast />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
