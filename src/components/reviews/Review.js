import React, { Component } from "react";

class Review extends Component {
  render() {
    return <li>{this.props.review.text}</li>;
  }
}

export default Review;
