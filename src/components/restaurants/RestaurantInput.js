import React, { Component } from "react";

class RestaurantInput extends Component {
  constructor() {
    super();

    this.state = {
      name: ""
    };
  }

  onChange = event => {
    const name = event.target.value;
    this.setState({
      name
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.store.dispatch({
      type: "ADD_RESTAURANT",
      restaurant: { name: this.state.name }
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} onChange={this.onChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default RestaurantInput;
