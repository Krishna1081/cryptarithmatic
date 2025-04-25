import "./App.css";
import Navbar from "./components/Navbar/navbar.jsx";
import "./index.css";
import Coin from "./pages/Coin/Coin.jsx";
import Footer from "./pages/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
