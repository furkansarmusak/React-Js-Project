import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = {
    email: "",
    password: "",
    city: "",
    desc: "",
  };

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db");
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="desc">Desc</Label>
            <Input
              type="textarea"
              name="desc"
              id="desc"
              placeholder="Enter desc"
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="city">City</Label>
            <Input type="select" name="city" id="city" onChange={this.onChangeHandler}>
                <option>Ankara</option>
                <option>İstanbul</option>
                <option>Trabzon</option>
            </Input>
          </FormGroup>
          <Button type="submit" >Save</Button>
        </Form>
      </div>
    );
  }
}
