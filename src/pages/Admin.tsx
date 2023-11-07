import { useState } from "react";
import { Link } from "react-router-dom";
import Book from "../components/books/Book";
import Genres from "../components/genres/Genres";
import ModelPortal from "../components/UI/ModelPortal";
import useBookContext from "../hooks/useBookContext";
import { BookInfos } from "../models/Book";

const Admin = () => {
    const { books, deleteBook } = useBookContext();
    const [open, setOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState<BookInfos>();

    function openDeleteModl(book: BookInfos) {
        setSelectedBook(book);
        setOpen(!open);
    }
    function handleClick() {
        deleteBook(selectedBook!.book_id!);
        setOpen(false);
    }

    return (
        <div className="store">
            <div className="aside">
                <Genres />
            </div>
            <div className="container">
                <Link to="/admin/add">
                    <button className="btn btn-primary">Add Book</button>
                </Link>
                <div className="books-gallery">
                    {books?.map((book) => {
                        return (
                            <div key={book.book_id}>
                                <ModelPortal
                                    open={open}
                                    message={selectedBook}
                                    onClose={() => setOpen(!open)}
                                    handleAction={handleClick}
                                />
                                <Book key={book.book_id} book={book}>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => openDeleteModl(book)}
                                    >
                                        delete
                                    </button>
                                    <Link to={"" + book.book_id} state={book}>
                                        <button className="btn btn-secondry">
                                            edit
                                        </button>
                                    </Link>
                                </Book>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Admin;
