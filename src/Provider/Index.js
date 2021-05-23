//jshint esversion:7
import React, {Component} from 'react';
export const MyContext = React.createContext();

class Index extends Component {
    constructor() {
        super();
        this.state = {
            books: [],
            currentlyReading: [],
            wantToRead: [],
            read: [],
            addBooks: books => {
                const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
                const read = books.filter(book => book.shelf === 'read');
                const wantToRead = books.filter(book => book.shelf === 'wantToRead');
                
                this.setState({books, currentlyReading, read, wantToRead});
            },
            moveBook: (book, newShelf, allShelfs) => {
                console.log(newShelf);
                console.log(allShelfs);
                const newBook = this.state.books.map(book => {
                    const foundID = allShelfs[newShelf].find(
                        bookID => bookID === book.id
                    );

                    if (foundID) {
                        book.shelf = newShelf
                    }

                    return book;
                });
                this.state.addBooks(newBook);
            }   
        };
    };

    render() {
        return (
            <MyContext.Provider value={{...this.state}}>
                {this.props.children}
            </MyContext.Provider>
        );
    };
}

export default Index;