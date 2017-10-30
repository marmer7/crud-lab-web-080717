import React, { Component } from "react";

class ReviewInput extends Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };
  }

  onChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  addReview = event => {
    event.preventDefault();
    this.props.store.dispatch({
      type: "ADD_REVIEW",
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      }
    });
    this.state.text = "";
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addReview}>
          Review:
          <input type="text" value={this.state.text} onChange={this.onChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
