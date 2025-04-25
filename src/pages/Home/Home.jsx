import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";

export const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);
  console.log(currency);
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
          <input type="text" placeholder="Search Crypto" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => {
          return (
            <div className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt="image" />
                <p>{item.name + " - " + item.symbol}</p>
              </div>
              <p>
                {currency.Symbol} {item.current_price}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
