import "./App.css";
import Navbar from "./components/Navbar/navbar";
import "./index.css";
import Coin from "./pages/Coin/Coin";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
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
