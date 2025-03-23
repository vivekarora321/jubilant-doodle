import React from 'react';

const FruitCard = ({ fruit, onSelect }) => {
  return (
    <div className="fruit-card" onClick={onSelect}>
      <h3>{fruit.name}</h3>
      <p>{fruit.description}</p>
    </div>
  );
};

export default FruitCard;
