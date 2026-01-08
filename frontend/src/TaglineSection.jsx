import React from 'react';

function TaglineSection() {
  return (
    <div className="card tagline-card">
      <h2>Why Choose Us?</h2>
      <div className="tagline-content">
        <p className="tagline-text">
          Efficient product management made simple. Track, manage, and optimize your inventory with ease.
        </p>
        <div className="tagline-features">
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <span>Fast & Reliable</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🔒</span>
            <span>Secure</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📊</span>
            <span>Real-time Updates</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaglineSection;

