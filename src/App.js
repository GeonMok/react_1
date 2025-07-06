import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState(0);
  const [coinName, setCoinName] = useState("");
  const [coinPrice, setCoinPrice] = useState(0);
  const handleUsdChange = (event) => {
    setUsd(event.target.value);
  };
  const handleCoinChange = (event) => {
    const selectedId = event.target.value;
    if (!selectedId) return;
    const foundCoin = coins.find((coin) => coin.id === selectedId);
    setCoinName(foundCoin.name);
    setCoinPrice(foundCoin.quotes.USD.price);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          <select onChange={handleCoinChange}>
            <option value="">select coin</option>
            {coins.map((x) => (
              <option key={x["id"]} value={x.id}>
                {x.name} ({x.symbol}): {x.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <h2>how much coin I can buy with {usd}$?</h2>
          <div>
            <label htmlFor="usd">USD: </label>
            <input
              id="usd"
              onChange={handleUsdChange}
              value={usd}
              type="number"
            />
          </div>
          <p>
            {coinPrice > 0 ? (
              <span>
                You can buy {Math.floor(usd / coinPrice)} {coinName}!
              </span>
            ) : (
              <span>select coin & write how much you have</span>
            )}
          </p>
        </>
      )}
    </div>
  );
}

export default App;
