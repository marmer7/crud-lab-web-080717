import React, { Component } from "react";
import ReviewInput from "../reviews/ReviewInput";
import Reviews from "../reviews/Reviews";

class Restaurant extends Component {
  deleteRestaurant = () => {
    this.props.store.dispatch({
      type: "DELETE_RESTAURANT",
      id: this.props.restaurant.id
    });
  };
  render() {
    return (
      <div>
        <li>{this.props.restaurant.name}</li>
        <button onClick={this.deleteRestaurant}>X</button>
        <ReviewInput
          store={this.props.store}
          restaurantId={this.props.restaurant.id}
        />
        <h3>All Reviews:</h3>
        <Reviews
          store={this.props.store}
          restaurantId={this.props.restaurant.id}
        />
      </div>
    );
  }
}

export default Restaurant;
