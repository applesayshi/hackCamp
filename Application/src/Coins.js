import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation without reloading the page
import './Coins.css';

class Coins {
  constructor() {
    this.coins = 0;
  }

  incrementCoin(value) {
    this.coins += value;
  }

  getCoins() {
    return this.coins;
  }
}

export default Coins;