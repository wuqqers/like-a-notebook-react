import React, { Component } from "react";
import { Table } from "reactstrap";
export default class ProductList extends Component {
  render() {
    return (
      <div>
        {/* hangi objenin title  derken şu şekilde gösteriyoruz {this.props.info.title} */}
        <h3>
          {this.props.info.title} - {this.props.currentCategory}
        </h3>
        <Table size="sm">
          <thead>
            <tr>
              <th>İd</th>
              <th>product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
