import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { FaArrowUp } from "react-icons/fa";
import "./Navbar.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd":
        setCurrency({ name: "usd", Symbol: "$" });
        break;
      case "inr":
        setCurrency({ name: "inr", Symbol: "₹" });
        break;
      case "eur":
        setCurrency({ name: "eur", Symbol: "€" });
        break;
      default:
        setCurrency({ name: "usd", Symbol: "$" });
        break;
    }
  };
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="logo" width={100} height={100} />
      </Link>
      <ul>
        <Link to={"/"}>Home</Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          Sign Up <FaArrowUp className="img" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
