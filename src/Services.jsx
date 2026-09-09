import React from 'react';
import './Services.css'; 

function Services() {
  
  const servicesList = [
    { id: 1, title: 'Gel Polish Manicure', price: 'from  1 800 ₽', duration: '60 min' },
    { id: 2, title: 'Gel Nail Extensions', price: 'from  2 500 ₽', duration: '90 min' },
    { id: 3, title: 'Intricate Nail Art', price: 'from  1500 ₽', duration: '50 min' },
    { id: 4, title: 'Removal', price: 'from  400 ₽', duration: '20 min' }
  ];

  return (
    <div className="services-section">
      <h2 className="services-title">OUR SERVICES</h2>
      <p className="services-subtitle">Immerse yourself in the atmosphere of care and aesthetics</p>

      <div className="services-grid">
        
        {servicesList.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-info">
              <h3 className="service-name">{service.title}</h3>
              <span className="service-duration">{service.duration}</span>
            </div>
            <div className="service-price">{service.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;