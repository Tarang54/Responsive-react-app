import React, { useState } from 'react';

const Product = ({ title, image }) => (
  <div className="product">
    <img src={image} alt={title} />
    <h3>{title}</h3>
  </div>
);

const Products = () => {
  const [products, setProducts] = useState(Array.from({ length: 6 }, (_, i) => ({ title: `Product ${i + 1}`, image: "./../public/cp.png" })));
  
  const loadMore = () => {
    const moreProducts = Array.from({ length: 6 }, (_, i) => ({ title: `Product ${products.length + i + 1}`, image: "./../public/cp.png" }));
    setProducts(products.concat(moreProducts));
  };

  return (
    <div className="products">
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
      <button onClick={loadMore}>Load More</button>
    </div>
  );
};

export default Products;
