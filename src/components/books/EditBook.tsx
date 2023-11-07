import { useState } from "react";
import { useLocation } from "react-router-dom";
import useBookContext from "../../hooks/useBookContext";
import { BookInfos } from "../../models/Book";
import { InputText, SelectCountry } from "../UI";
import BookPreview from "./BookPreview";

const EditBook = () => {
  const {editBook} = useBookContext()
    const { state: book } = useLocation();
    const [editedBook, setEditedBook] = useState<BookInfos>(book);
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target;
        setEditedBook({ ...editedBook, [id]: value });
    }
    function handleCountry(event: React.ChangeEvent<HTMLSelectElement>) {
        setEditedBook({ ...editedBook, country_id: event.target.value });
    }
    function handleSubmit() {
      editBook(editedBook)
    }
    return (
        <div className="book-display">
            <div className="container">
                <div>
                    <InputText
                        handleChange={handleChange}
                        type="text"
                        label="title"
                        value={editedBook.title}
                    />
                    <InputText
                        handleChange={handleChange}
                        type="text"
                        label="author"
                        value={editedBook.author.author_name}
                    />
                    <SelectCountry
                        val={editedBook.country_id}
                        handleSelected={handleCountry}
                        label="Country"
                    />
                    <InputText
                        handleChange={handleChange}
                        type="text"
                        label="language"
                        value={editedBook.language}
                    />
                    <InputText
                        handleChange={handleChange}
                        type="number"
                        label="pages"
                        value={editedBook.pages}
                    />
                    <InputText
                        handleChange={handleChange}
                        type="number"
                        label="year"
                        value={editedBook.year}
                        min={100}
                        max={2023}
                    />
                    <InputText
                        handleChange={handleChange}
                        type="text"
                        label="link"
                        value={editedBook.link}
                    />
                    <div className="form-group">
                        <label>image</label>
                        <input
                            onChange={(e) => handleChange(e)}
                            type="file"
                            id="image"
                        />
                    </div>
                    <button onClick={handleSubmit} className="btn btn-secondry">
                        Submit
                    </button>
                </div>
            </div>
            <BookPreview book={editedBook}/>
        </div>
    );
};

export default EditBook;
