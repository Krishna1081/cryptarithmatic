import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setDisplayCoin(allCoin);
    }
  };
  const searchHandler = async (e) => {
    e.preventDefault();
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayCoin(coins);
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

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
          <input
            type="text"
            placeholder="Search Crypto"
            value={input}
            onChange={inputHandler}
            list="coinlist"
          />

          <datalist id="coinlist">
            {allCoin.map((item, index) => {
              return <option value={item.name} key={index} />;
            })}
          </datalist>
          <button type="submit" onClick={searchHandler}>
            Search
          </button>
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
            <Link to={`coin/${item.id}`} className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt="image" />
                <p>{item.name + " - " + item.symbol}</p>
              </div>
              <p>
                {currency.Symbol} {item.current_price.toLocaleString()}
              </p>
              <p
                className={
                  item.price_change_percentage_24h > 0 ? "green" : "red"
                }
              >
                {Math.floor(item.price_change_percentage_24h * 100) / 100}
              </p>
              <p className="market-cap">
                {currency.Symbol} {item.market_cap.toLocaleString()}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
