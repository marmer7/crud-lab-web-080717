import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    const reviews = this.props.store
      .getState()
      .reviews.filter(review => review.restaurantId === this.props.restaurantId)
      .map(review => <Review review={review} key={review.id} />);

    return <ul>{reviews}</ul>;
  }
}

export default Reviews;
