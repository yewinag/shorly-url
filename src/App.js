import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Listing from './containers/Listing';
import { Header } from './components/layouts';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
