import React from 'react';
import './Inventory.css';

function Inventory() {
  return (
    <div className="page-container">
      <div className="top-container">
      <iframe
            src="/newGame/game.html"
            title="Godot Game"
            width="100%"
            height="100%"
          />
        {}
      </div>
      <div className="bottom-container">
        <h1>List of Items in Inventory (similar to shop)</h1>
        {/* Add List of Items here */}
      </div>
    </div>
  );
}

export default Inventory;
