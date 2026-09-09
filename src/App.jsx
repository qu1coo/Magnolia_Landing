import React from 'react';
import './App.css';
import magnoliaImg from './assets/magnolia_branch.png';
import Services from './Services';
import Masters from './Masters';
import Portfolio from './Portfolio';
import Contacts from './Contacts';

function App() {
  return (
    <>
      <div className="hero-section">

        <div className="hero-content">
          <h1 className="hero-title">MAGNOLIA</h1>
          <p className="hero-subtitle">Nail salon in<br />Novosibirsk</p>

          <div className="offer-card">
            <p className="offer-text">10% off for first-time<br />clients</p>
            <a href="#contacts" className="book-button">BOOK NOW</a>
            
          </div>
        </div>

        <img src={magnoliaImg} alt="Ветка магнолии" className="magnolia-img" />

      </div>

      <Services />
      <Masters />
      <Portfolio />
      <Contacts />
    </>
  );
}

export default App;