import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Routes, and Route
import './App.css';

// Import the pages (or components)
import Home from './Home';
import Shop from './Shop';
import Inventory from './Inventory';
import Navbar from './Navbar'; // Import a Navbar component to navigate between pages

function App() {
  return (
    <Router> {/* Wrap the app with Router */}
      <div className="app-container">
        <div className="content">
          <Routes> {/* Use Routes to define the routes */}
            <Route path="/" element={<Home />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Inventory" element={<Inventory />} />
          </Routes>
        </div>
        <Navbar /> {/* Always show the Navbar at the bottom */}
      </div>
    </Router>
  );
}

export default App;
