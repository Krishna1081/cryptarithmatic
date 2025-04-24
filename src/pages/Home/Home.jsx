import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Crypto Marketplace
        </h1>
        <p>
          Welcome to the worlds largest cryptomarketplace. Sign up and explore
          more about cryptocurrencies
        </p>
        <form>
          <input type="text" placeholder="search crypto" />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
