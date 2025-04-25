import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext.jsx";
import LineChart from "../../components/LineChart/LineChart.jsx";

export const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-cg-demo-api-key": "CG-zG5Zo5AtNEVpucgWqiCv8FTZ",
          },
        }
      );
      const data = await res.json();
      setCoinData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchHistoricalData = async () => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-cg-demo-api-key": "CG-zG5Zo5AtNEVpucgWqiCv8FTZ",
          },
        }
      );
      const data = await res.json();
      setHistoricalData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency, coinId]);

  if (!coinData || !historicalData) {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }

  const priceKey = currency.name.toLowerCase();

  return (
    <div className="coin">
      <div className="coin-name">
        <img src={coinData.image.large} alt={`${coinData.name} logo`} />
        <p>
          <b>
            {coinData.name} {coinData.symbol.toUpperCase()}
          </b>
        </p>
      </div>
      <div className="coin-chart">
        <LineChart historicalData={historicalData} />
      </div>
      <div className="coin-info">
        <div className="info-row">
          <li>Crypto Market Rank</li>
          <li>{coinData.market_cap_rank}</li>
        </div>
        <div className="info-row">
          <li>Current Price</li>
          <li>
            {currency.Symbol}
            {coinData.market_data.current_price[priceKey].toLocaleString()}
          </li>
        </div>
        <div className="info-row">
          <li>Market Cap</li>
          <li>
            {currency.Symbol}
            {coinData.market_data.market_cap[priceKey].toLocaleString()}
          </li>
        </div>
        <div className="info-row">
          <li>24 Hour High</li>
          <li>
            {currency.Symbol}
            {coinData.market_data.high_24h[priceKey].toLocaleString()}
          </li>
        </div>
        <div className="info-row">
          <li>24 Hour Low</li>
          <li>
            {currency.Symbol}
            {coinData.market_data.low_24h[priceKey].toLocaleString()}
          </li>
        </div>
      </div>
    </div>
  );
};

export default Coin;
