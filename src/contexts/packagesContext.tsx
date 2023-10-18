import {
  ReactNode,
  useReducer,
  createContext,
  Dispatch,
  useEffect,
} from "react";
import useBooksList from "../hooks/useBooksList";
import { BookInfos } from "../models/Book";
import { ADDBOOK, DELETEBOOK, INITBOOKS, UPDATEBOOK } from "../reducers/actions";
import BookReducer, { BookActions } from "../reducers/booksReducer";

interface BooksContextType {
  books: BookInfos[];
  // addBook: (book: BookInfos) => void;
  // editBook: (book: BookInfos) => void;
  // deleteBook: (bookId: number) => void;
  dispatch: Dispatch<BookActions>;
}

interface Props {
  children: ReactNode;
}

export const BooksContext = createContext<BooksContextType>(
  {} as BooksContextType,
);

const BooksContextProvider = ({ children }: Props) => {
  const { data } = useBooksList();
  const [books, dispatch] = useReducer(BookReducer, []);

  useEffect(() => {
    dispatch({ type: INITBOOKS, books: data! });
  }, [data]);

 

  return (
    <BooksContext.Provider
      value={{
        books,
        dispatch,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
