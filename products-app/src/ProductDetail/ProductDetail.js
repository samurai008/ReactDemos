import React, { Component } from 'react'

export default class ProductDetail extends Component {

  product;

  constructor() {
    super();

  }

  render() {
    console.log(this.props.product)
    return (
      <div>
        {this.props.product == null || this.props.product === undefined ? 'Select a product' : 'Product selected!'}
      </div>
    )
  }
}
