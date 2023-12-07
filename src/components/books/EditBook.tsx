import { useState } from "react";
import { RiFileUploadLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import useBookContext from "../../hooks/useBookContext";
import Author from "../../models/Author";
import { BookInfos } from "../../models/Book";
import Genre from "../../models/Genre";
import { InputText, SelectCountry } from "../UI";
import InputSelect from "../UI/InputSelect";
import TagsInput from "../UI/TagsInput";
import BookPreview from "./BookPreview";

const EditBook = () => {
    const { editBook } = useBookContext();
    const { state: book } = useLocation();
    const [editedBook, setEditedBook] = useState<BookInfos>(book);
    function handleAuthor(author: Author) {
        setEditedBook({ ...editedBook, author });
    }
    function handleGenres(genres: Genre[]) {
        setEditedBook({ ...editedBook, genres: genres });
    }
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target;
        setEditedBook({ ...editedBook, [id]: value });
    }
    function handleCountry(event: React.ChangeEvent<HTMLSelectElement>) {
        setEditedBook({ ...editedBook, country_id: event.target.value });
    }
    const [baseImage, setBaseImage] = useState<any>([]);

    const convertBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                if (fileReader.result) {
                    resolve(fileReader.result.toString());
                }
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const onFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const name = e.target.files[0].name;
            const base64 = await convertBase64(e.target.files[0]);
            setBaseImage([base64, name]);
            setEditedBook({
                ...book,
                image_link: e.target.files[0],
            });
        }
    };
    function handleSubmit() {
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
                <InputSelect handleChange={handleAuthor} label="author" />
                <SelectCountry
                    val={book.country_id}
                    handleSelected={handleCountry}
                    label="Country"
                />
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
                    <div className="input-file">
                        <label
                            className="custom-file-input"
                            htmlFor="file-input"
                        >
                            <span className="button-text">
                                <RiFileUploadLine
                                    style={{ height: "50px", width: "auto" }}
                                />
                                Choose File
                            </span>
                        </label>
                        <input
                            id="file-input"
                            type="file"
                            name="courseImages"
                            onChange={onFileUpload}
                            style={{ visibility: "hidden" }}
                            accept="image/png, image/gif,image/jpg, image/jpeg"
                        />
                    </div>
                </div>
                <div>
                    {baseImage && (
                        <img
                            src={baseImage[0]}
                            alt={baseImage[1]}
                            style={{
                                maxWidth: "200px",
                                maxHeight: "200px",
                            }}
                        />
                    )}
                </div>
                <button onClick={handleSubmit} className="btn btn-secondry">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default EditBook;