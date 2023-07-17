import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Generate from "./pages/Generate/Generate";
import Pricing from "./pages/Pricing/Pricing";
import { Routes, Route, Link } from "react-router-dom";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMe } from "./redux/slices/auth";
import Footer from "./components/Footer/Footer";
import Privacy from "./pages/Formal/Privacy";
import Terms from "./pages/Formal/Terms";
import Cookies from "./pages/Formal/Cookies";
function App() {
  const clientId = process.env.REACT_APP_CLIENT_ID || undefined;
  const dispatch = useDispatch();
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
    // localStorage.clear();
    dispatch(fetchMe());
  }, []);
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generation" element={<Generate />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
