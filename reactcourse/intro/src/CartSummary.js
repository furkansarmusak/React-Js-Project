import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,NavItem, NavLink
} from "reactstrap";
import {Link} from 'react-router-dom'

export default class CartSummary extends Component {

  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Carts
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
                <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>Sil</Badge>
              {cartItem.product.productName}
              <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem><Link to="/cart">go to Cart</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  noRecord(){
      return (
        <NavItem>
            <NavLink>Empty Cart</NavLink>
        </NavItem>
      );
  }

  render() {
    return <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.noRecord() }
    </div>;
  }
}
