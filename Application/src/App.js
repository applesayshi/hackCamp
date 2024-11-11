import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Routes, and Route
import './App.css';

// Import the pages (or components)
import Coin from './Coins';
import Home from './Home';
import Shop from './Shop';
import Inventory from './Inventory';
import Navbar from './Navbar'; // Import a Navbar component to navigate between pages

function App() {

  // Create Coins class
  const coinManager = new Coins();

  // State to trigger a re-render when the coin count changes
  const [totalCoins, setTotalCoins] = useState(coinManager.getCoins());

  // Function to add coins and update state
  const handleAddCoins = (value) => {
    coinManager.incrementCoin(value);
    setTotalCoins(coinManager.getCoins()); // Update the state
  };

  return (
    <Router> {/* Wrap the app with Router */}
      <div className="app-container">
        <div className="content">
        <div className="top-bar">
          <CoinDisplay coinManager={coinManager} /> {/* Display the coin count */}
        </div>
          <Routes> {/* Use Routes to define the routes */}
            <Route path="/" element={<Home />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Shop" element={<Shop addCoins={handleAddCoins} />} />
            <Route path="/Inventory" element={<Inventory />} />
          </Routes>
        </div>
        <Navbar /> {/* Always show the Navbar at the bottom */}
      </div>
    </Router>
  );
}

export default App;
