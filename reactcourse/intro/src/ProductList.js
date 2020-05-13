import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {

 

  render() {
    return (
      <div>
        <h3>
          {this.props.info.title} - {this.props.currentCategory}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Unit Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((pro) => (
              <tr key={pro.id}>
                <th scope="row">{pro.id}</th>
                <td>{pro.productName}</td>
                <td>{pro.quantityPerUnit}</td>
                <td>{pro.unitPrice}</td>
                <td>{pro.unitsInStock}</td>
                <td>
                  <Button onClick={()=>this.props.addTocart(pro)} color="info">Add</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
