import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.productName}>
          <h3>{product.productName}</h3>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}</p>
          <p>Availability: {product.availability}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
