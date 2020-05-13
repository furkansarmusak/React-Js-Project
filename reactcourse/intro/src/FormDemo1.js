import React, { Component } from "react";

export default class FormDemo1 extends Component {
  state = {
    userName: "",
    city : ""
  };

  onChangeHandler = (event) => {
   // this.setState({ userName: event.target.value });
   let name = event.target.name;
   let value = event.target.value;

   this.setState({[name]:value})

  };

  onsubmitHandler = (event) => {
    event.preventDefault();
    //alert(this.state.userName);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onsubmitHandler}>
          <h3>UserName</h3>
          <input type="text" name="userName" onChange={this.onChangeHandler}></input>
          <h3>UserName is {this.state.userName}</h3>

          <h3>City</h3>
          <input type="text" name="city" onChange={this.onChangeHandler}></input>
          <h3>City is {this.state.city}</h3>

        
          <input type="submit" value="Save"></input>
        </form>
      </div>
    );
  }
}
