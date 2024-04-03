import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ minPrice, maxPrice });
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default Filter;
