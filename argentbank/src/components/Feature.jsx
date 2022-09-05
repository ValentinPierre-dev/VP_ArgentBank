// React
import React from 'react';

function Feature(props) {
  return (
    <div className="feature-item">
        <img
            src={props.featureImageSrc}
            alt={props.featureImageAlt}
            className="feature-icon"
        />
        <h3 className="feature-item-title">{props.featureTitle}</h3>
        <p>{props.featureText}</p>
    </div>
  );
}

export default Feature;