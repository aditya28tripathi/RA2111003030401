import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import Filter from './components/Filter';
import Sort from './components/Sort';
import Pagination from './components/Pagination';

const BASE_URL = 'http://20.244.56.144/test';

function App() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sorting, setSorting] = useState('');
  const [pagination, setPagination] = useState({ page: 1, limit: 10 });
  const [company, setCompany] = useState('ASHINATO');
  const [category, setCategory] = useState('Hu');

  useEffect(() => {
    fetchProducts();
  }, [filters, sorting, pagination, company, category]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(buildUrl());
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
    }
  };

  const buildUrl = () => {
    let url = `${BASE_URL}/companies/${company}/categories/${category}/products/top-${pagination.limit}`;
    const { minPrice, maxPrice } = filters;
    if (minPrice !== undefined && maxPrice !== undefined) {
      url += `minPrice-${minPrice}-maxPrice-${maxPrice}`;
    }
    if (sorting) {
      url += `q=${sorting}`;
    }
    return url;
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setPagination({ ...pagination, page: 1 });
  };

  const handleSortChange = (newSorting) => {
    setSorting(newSorting);
  };

  const handlePageChange = (newPage) => {
    setPagination({ ...pagination, page: newPage });
  };

  const handleCompanyChange = (newCompany) => {
    setCompany(newCompany);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div>
      <h1>Top Products</h1>
      <Filter onFilterChange={handleFilterChange} />
      <Sort onSortChange={handleSortChange} />
      <div>
        <label htmlFor="company">Company:</label>
        <select id="company" onChange={(e) => handleCompanyChange(e.target.value)}>
          <option value="ASHINATO">ASHINATO</option>
          {/* Add other companies here */}
        </select>
        <label htmlFor="category">Category:</label>
        <select id="category" onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value="Hu">Hu</option>
          {/* Add other categories here */}
        </select>
      </div>
      <ProductList products={products} />
      <Pagination
        currentPage={pagination.page}
        totalPages={Math.ceil(products.length / pagination.limit)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
