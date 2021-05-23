import React, { Component } from "react";

class FAB extends Component {
  render() {
    return (
      <div className="open-search">
        <button onClick={() => this.setState({ showSearchPage: false })}>
          Add a book
        </button>
      </div>
    );
  }
}

export default FAB;
