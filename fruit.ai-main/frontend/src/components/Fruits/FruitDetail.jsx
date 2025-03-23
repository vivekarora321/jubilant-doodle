import React from 'react';

const FruitDetails = ({ fruit, onBack }) => {
  return (
    <div className="fruit-details">
      <h3>{fruit.name}</h3>
      <p>{fruit.description}</p>
      <button onClick={onBack}>Back to list</button>
    </div>
  );
};

export default FruitDetails;
