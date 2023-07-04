import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Generate from "./pages/Generate/Generate";
import Pricing from "./pages/Pricing/Pricing";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generation" element={<Generate />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
