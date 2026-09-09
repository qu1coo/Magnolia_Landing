import React from 'react';
import './Masters.css';
import masterImg from './assets/master-image.jpg';

function Masters() {
  return (
    <div className="master-section">
      <div className="master-container">
        
        <div className="master-image-block">
          <img 
            src={masterImg}
            alt="The founder of the studio" 
            className="master-single-photo" 
          />
        </div>

        <div className="master-content-block">
          <span className="master-tag">Founder & Top Master</span>
          <h2 className="master-single-title">Alina Mikhina</h2>
          
          <p className="master-philosophy">
            "I believe that a manicure is not just a basic procedure, but a special ritual of self—care. 
            In every move, I strive for perfection, creating for you not only the perfect 
            shape and finish, but also a moment of sincere relaxation and aesthetic pleasure".
          </p>
          
          <div className="master-stats">
            <div className="stat-item">
              <h4>5+ years</h4>
              <p>Years of active practice</p>
            </div>
            <div className="stat-item">
              <h4>100%</h4>
              <p>Security and Safety & Sanitation Standards</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Masters;