import "../components/books/Book.css";
import Book from "../components/books/Book";
import useBookContext from "../hooks/useBookContext";
import Genres from "../components/genres/Genres";

const Home = () => {
  const { books } = useBookContext();
  const handleClick = () => {};
  return (
    <div className="store">
      <div className="aside">
        <Genres />
      </div>
      <div className="main">
        <div className="books-gallery container container-row">
          {books?.map((book) => {
            return (
              <Book key={book.book_id} book={book}>
                <button
                  className="btn btn-primary btn-center"
                  onClick={handleClick}
                >
                  Add to cart
                </button>
              </Book>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
