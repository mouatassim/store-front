import "./Book.css";
import { BsChevronCompactRight } from "react-icons/bs";
import { BookInfos } from "../../models/Book";
import { ReactNode } from "react";

interface Props {
  book: BookInfos;
  children: ReactNode;
}

const Book = ({ book, children }: Props) => {
  return (
    <div>
      <div className="card">
        <div className="card__header">
          <img src={`http://localhost:5000/static/${book.image_link}`} />
        </div>
        <a href="#" className="card__body">
          <div className="card__description">
            <h4>{book.title}</h4>
            <p className="text-secondary">{book.author}</p>
          </div>

          <div className="arrow">
            <BsChevronCompactRight className="icon--sm icon--secondary" />
          </div>
        </a>
        <div className="card__action">{children}</div>
      </div>
    </div>
  );
};

export default Book;
