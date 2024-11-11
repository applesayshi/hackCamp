import React from 'react';
import './Home.css'; 

function Home() {
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
        <h1>List of Tasks</h1>
        {/* Add List of Tasks here */}
      </div>
    </div>
  );
}

export default Home;
