import React from 'react';
import './Portfolio.css';
import nude from './assets/nud.jpg';
import french from './assets/french.jpg';
import matte from './assets/matte.jpg';
import japan from './assets/japan.jpg';
import abstraction from './assets/abstraction.jpg';
import wine from './assets/wine.jpg';

function Portfolio() {

  const works = [
    {
      id: 1,
      title: 'Classic Nude & Glossy Finish',
      image: nude,
    },
    {
      id: 2,
      title: 'Minimalist French',
      image: french,
    },
    {
      id: 3,
      title: 'Matte Finish',
      image: matte,
    },
    {
      id: 4,
      title: 'Japanese manicure',
      image: japan,
    },
    {
      id: 5,
      title: 'Abstract art design',
      image: abstraction,
    },
    {
      id: 6,
      title: 'Deep wine gloss',
      image: wine,
    }
  ];

  return (
    <div className="portfolio-section">
      <h2 className="portfolio-title">AESTHETICS GALLERY</h2>
      <p className="portfolio-subtitle">Every work is a small piece of art</p>

      <div className="portfolio-grid">
        {works.map((work) => (
          <div className="portfolio-item" key={work.id}>
            <div className="portfolio-img-wrapper">
              <img src={work.image} alt={work.title} className="portfolio-img" />
              <div className="portfolio-overlay">
                <span className="portfolio-item-title">{work.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;