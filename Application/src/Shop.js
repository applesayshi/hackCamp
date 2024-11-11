import React from 'react';
import './Shop.css';  

function Shop() {
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
        <h1>Shop Contents</h1>
        {/* Add shop items here */}
      </div>
    </div>
  );
}

export default Shop;
