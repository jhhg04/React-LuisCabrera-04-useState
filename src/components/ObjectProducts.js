import React, { useState } from 'react';

const initialProduct = {
  title: 'Titulo',
  description: 'Description',
};

const ObjectProducts = () => {
  const [product, setProduct] = useState(initialProduct);
  const updateProduct = (propery, value) => {
    setProduct({
      ...product,
      [propery]: value,
    });
  };
  return (
    <div>
      <button onClick={() => updateProduct('title', 'New Title')}>
        Update
      </button>

      <h1>{product.title}</h1>
      <h1>{product.description}</h1>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
};

export default ObjectProducts;
