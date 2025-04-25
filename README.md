# 🪙 Cryptarithmatic

Cryptarithmatic is a modern cryptocurrency tracker that lets users explore real-time prices, trends, and stats for major cryptocurrencies — all wrapped in a sleek, user-friendly interface.

[Watch Demo](./demo1.mkv)

## 🚀 Features

🔍 Search & Explore: Instantly find your favorite coins.

📈 Live Market Data: Real-time prices, 24H highs/lows, market caps & rankings.

📊 Interactive Line Charts: Visualize historical prices with Google Charts.

🌐 Multi-Currency Support: View prices in your preferred currency.

🔄 Loading Spinners: Smooth loading indicators during API calls.

🧠 Built with context API for global state management.

## 🛠️ Tech Stack

React

React Router

Context API

CoinGecko API

Google Charts

CSS Modules

## 📦Installation

        git clone https://github.com/yourusername/cryptarithmatic.git
        cd cryptarithmatic
        npm install
        npm start

## 📁 Folder Structure

        src/
        │
        ├── components/
        │   └── LineChart/
        │
        ├── context/
        │   └── CoinContext.js
        │
        ├── pages/
        │   ├── Home/
        │   └── Coin/
        │
        ├── App.js
        └── index.js

## ✅ To-Do / Roadmap

- Add dynamic time range selector (7D, 30D, 1Y) [x]
- Add currency selector dropdown [x]
- Pagination for large coin lists [x]
- Dark mode support 🌙 [x]
