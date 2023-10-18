import { BookInfos } from "../models/Book";
import {
  ADDBOOK,
  DELETEBOOK,
  INITBOOKS,
  RESETBOOKS,
  UPDATEBOOK,
} from "./actions";

interface InitBooks {
  type: typeof INITBOOKS;
  books: BookInfos[];
}
interface ResetBooks {
  type: typeof RESETBOOKS;
}
interface AddBook {
  type: typeof ADDBOOK;
  book: BookInfos;
}

interface DeleteBook {
  type: typeof DELETEBOOK;
  bookId: number;
}

interface UpdateBook {
  type: typeof UPDATEBOOK;
  book: BookInfos;
}

export type BookActions =
  | InitBooks
  | ResetBooks
  | AddBook
  | DeleteBook
  | UpdateBook;

const bookReducer = (books: BookInfos[], action: BookActions): BookInfos[] => {
  switch (action.type) {
    case INITBOOKS:
      return action.books;
    case RESETBOOKS:
      return [];
    case ADDBOOK:
      return [...books, action.book];
    case UPDATEBOOK:
      return books.map((b) => {
        return b.book_id === action.book.book_id ? action.book : b;
      });
    case DELETEBOOK:
      return books.filter((b) => b.book_id !== action.bookId);
  }
};

export default bookReducer;
