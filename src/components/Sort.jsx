import React, { useState } from 'react';

const Sort = ({ onSortChange }) => {
  const [sorting, setSorting] = useState('');

  const handleSortChange = () => {
    onSortChange(sorting);
  };

  return (
    <div>
      <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
        <option value="">Sort By</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
        <option value="discount">Discount</option>
        <option value="availability">Availability</option>
      </select>
      <button onClick={handleSortChange}>Apply Sorting</button>
    </div>
  );
};

export default Sort;
