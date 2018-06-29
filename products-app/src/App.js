import React, { Component } from 'react';
import ProductList from './ProductList/ProductList';
import { products } from "./shared/Products";

class App extends Component {
  render() {
    return (
      <div className="container">
        <ProductList products={products} />
      </div>
    );
  }
}

export default App;
