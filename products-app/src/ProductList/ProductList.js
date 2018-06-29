import React, { Component } from 'react'
import ProductDetail from '../ProductDetail/ProductDetail';

export default class ProductList extends Component {

  products;

  constructor (props) {
    super(props)

    this.state = {
      product: null
    }

  }

  componentWillMount() {
    this.products = this.props.products.map((product, i) => {
      return (
        <li key={i} className="list-group-item text-center">
          <a href="#" onClick={this.setProduct.bind(this, i)}>
            <img src={product.image} width="100" />
          </a>
        </li>
      )
    });
  }

  setProduct(i) {
    console.log(i)
    this.setState({
      product: this.props.products[i]
    })
    console.log(this.state.product);
  } 

  render() {

    return (
      <div className="row">
        <div className="col-12 col-md-4">
          <ul className="list-group">
            {this.products}
          </ul>                
        </div>

        <div className="col-12 col-md-8">
          <ProductDetail product={this.state.product} />
        </div>
      </div>
    )
  }
}
