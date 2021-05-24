import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {search} from '../BooksAPI';
import Book from '../components/Book';
import {getAll} from '../BooksAPI';
class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            books: []
        };
    };

    async componentDidMount() {
        try {
            const books = await getAll();
            this
                .props
                .addBooks(books);
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = async e => {
        try {
            const query = e.target.value;
            this.setState({query});

            if (query.trim()) {
                const results = await search(query);
                if (results.error) {
                    this.setState({books: []});
                } else {
                    this.setState({books: results});
                }
            }
        } catch (error) {}
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to={'/'}>
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            value={this.state.query}
                            onChange={this.handleChange}
                            placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.length > 0 && this
                            .state
                            .books
                            .map(book => {
                                const foundShelf = this
                                    .props
                                    .books
                                    .find(searchBook => searchBook.id === book.id);

                                if (foundShelf) {
                                    book.shelf = foundShelf.shelf;
                                }else {
                                    book.shelf = "none";
                                }

                                return (<Book key={book.id} {...book} moveBook={this.props.moveBook}/>);
                            })}
                    </ol>
                </div>
            </div>
        );
    };
}

export default Search;