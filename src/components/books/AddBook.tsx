import { useState } from "react";
import useBookContext from "../../hooks/useBookContext";
import { BookInfos } from "../../models/Book";
import { InputText,SelectCountry } from "../UI";

const AddBook = () => {
  const [book, setBook] = useState<BookInfos>({
    country_id: "FR",
    image_link: "",
    language: "",
    link: "",
    pages: 0,
    title: "",
    year: 1900,
    author:"",
    genres:[],
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    setBook({ ...book, [id]: value });
  }
  function handleCountry(event: React.ChangeEvent<HTMLSelectElement>) {
    setBook({ ...book, country_id: event.target.value });
  }
  const { addBook } = useBookContext();
  function handleSubmit() {
    addBook({ ...book, book_id: Date.now() });
  }
  return (
    <div className="container container-center">
      <div>
        <InputText
          handleChange={handleChange}
          type="text"
          label="title"
          value={book.title}
        />
        <InputText
          handleChange={handleChange}
          type="text"
          label="author"
          value={book.author}
        />
        <SelectCountry country={book.country_id} handleSelected={handleCountry} />
        <InputText
          handleChange={handleChange}
          type="text"
          label="language"
          value={book.language}
        />
        <InputText
          handleChange={handleChange}
          type="number"
          label="pages"
          value={book.pages}
        />
        <InputText
          handleChange={handleChange}
          type="number"
          label="year"
          value={book.year}
          min={100}
          max={2023}
        />
        <InputText
          handleChange={handleChange}
          type="text"
          label="link"
          value={book.link}
        />
        <div className="form-group">
          <label>image</label>
          <input onChange={(e) => handleChange(e)} type="file" id="image" />
        </div>
        <button onClick={handleSubmit} className="btn btn-secondry">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddBook;
