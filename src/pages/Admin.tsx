import { useState } from "react";
import { Link } from "react-router-dom";
import Book from "../components/books/Book";
import Genres from "../components/genres/Genres";
import ModelPortal from "../components/UI/ModelPortal";
import useBookContext from "../hooks/useBookContext";

const Admin = () => {

  const { books,deleteBook } = useBookContext();
  const [open,setOpen] = useState(false)
  const [bookId,setBookId] = useState(0)

  function openDeleteModl(id:any){  
    setOpen(!open);
    setBookId(id)
  }
  function handleClick(){
    deleteBook(bookId);
    setOpen(false)
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
                <ModelPortal open={open} message={book} onClose={()=>setOpen(!open)} handleAction={handleClick}  />
                <Book key={book.book_id} book={book} >
                  <button className="btn btn-danger" onClick={()=>openDeleteModl(book.book_id)} >delete</button>
                  <Link to={"" + book.book_id} state={book}>
                    <button className="btn btn-secondry">edit</button>
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
