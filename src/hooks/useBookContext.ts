import { useContext } from "react";
import { BooksContext } from "../contexts/packagesContext";
import { BookInfos } from "../models/Book";
import { ADDBOOK, DELETEBOOK, UPDATEBOOK } from "../reducers/actions";

const useBookContext = () => {

    const context = useContext(BooksContext);

    const books = context.books;
    
    const addBook = (book: BookInfos) => {        
        context.dispatch({ type: ADDBOOK, book: book });
    };

    const editBook = (book: BookInfos) => {
        context.dispatch({ type: UPDATEBOOK, book: book });
    };

    const deleteBook = (id: number) => {
        context.dispatch({ type: DELETEBOOK, bookId: id });
    };

    return {
        books,
        addBook,
        editBook,
        deleteBook,
    };
};

export default useBookContext;
