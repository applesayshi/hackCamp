import React from 'react';
import './CoinDisplay.css';

const CoinDisplay = ({ coinManager }) => {
  const coinCount = coinManager.getCoins(); // Get the current coin amount

  return (
    <div className="coin-display">
      <span role="img" aria-label="coin">💰</span> {coinCount} Coins
    </div>
  );
};

export default CoinDisplay;