
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button key={page} onClick={() => handlePageChange(page)}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
