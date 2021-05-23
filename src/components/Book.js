import React, { Component } from "react";
import { update } from "../BooksAPI";

class Book extends Component {
  handleChange = async (e) => {
    try {
      const newShelf = e.target.value;
      const book = this.props;
      const allShelfs = await update(book, newShelf);
      this.props.moveBook(book, newShelf, allShelfs);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <li>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${this.props.imageLinks.thumbnail})`,
                }}
              ></div>
              <div className="book-shelf-changer">
                <select onChange={this.handleChange} value={this.props.shelf}>
                  <option value="move" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{this.props.title}</div>
            <div className="book-authors">{this.props.authors[0]}</div>
          </div>
        </li>
      </div>
    );
  }
}

export default Book;
