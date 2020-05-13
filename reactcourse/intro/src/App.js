import React, { Component } from "react";
import "./App.css";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: [],
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProduts(category.id);
  };

  getProduts = (categoryId) => {
    let url = "http://localhost:3000/products";

    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  componentDidMount() {
    this.getProduts();
  }

  addTocart = (product) => {
    let newcart = this.state.cart;
    var addedItem = newcart.find((cItem) => cItem.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newcart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newcart });
    alertify.success(product.productName + " added to cart", 2);
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " remove from cart", 2);
  };

  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };

    return (
      <Container>
        <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />

        <Row>
          <Col xs="3">
            <CategoryList
              currentCategory={this.state.currentCategory}
              info={categoryInfo}
              changeCategory={this.changeCategory}
            />
          </Col>
          <Col xs="9">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <ProductList
                    {...props}
                    products={this.state.products}
                    currentCategory={this.state.currentCategory}
                    info={productInfo}
                    addTocart={this.addTocart}
                  />
                )}
              ></Route>
              <Route
                exact
                path="/cart"
                render={(props) => (
                  <CartList
                    {...props}
                    cart={this.state.cart}
                    removeFromCart={this.removeFromCart}
                  />
                )}
              ></Route>
              <Route path="/form" component={FormDemo1}></Route>
              <Route path="/form2" component={FormDemo2}></Route>

              <Route component={NotFound}></Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    );
  }
}
