import React, { useState } from 'react';

const initialCart = [
  {
    id: 1,
    title: 'Product',
    description: 'Desc',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Desc 2',
  },
];

const ArrayCart = () => {
  const [cart, setCart] = useState(initialCart);

  const deleteProduct = (productId) => {
    const changedCart = cart.filter((product) => product.id !== productId);
    setCart(changedCart);
  };

  const addProduct = (newProduct) => {
    newProduct.id = Date.now();
    const changedCart = [newProduct, ...cart];
    setCart(changedCart);
  };

  const updateProduct = (editProduct) => {
    const changedCart = cart.map((product) =>
      product.id === editProduct.id ? editProduct : product
    );
    setCart(changedCart);
  };

  return (
    <div>
      <button
        onClick={() =>
          addProduct({ title: 'New Title', description: 'New Desc' })
        }
      >
        Add
      </button>

      {cart.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
          <button
            onClick={() =>
              updateProduct({
                id: product.id,
                title: 'Edit Title',
                description: 'Edit Desc',
              })
            }
          >
            Update
          </button>
        </div>
      ))}
      <br />
      <br />
      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </div>
  );
};

export default ArrayCart;
