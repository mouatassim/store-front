import { useState } from "react";
import { RiFileUploadLine } from "react-icons/ri";
import useAddBook from "../../hooks/useAddBook";
import Author from "../../models/Author";
import { BookInfos } from "../../models/Book";
import Genre from "../../models/Genre";
import { InputText, SelectCountry } from "../UI";
import "../UI/inputfile.css";
import InputSelect from "../UI/InputSelect";
import TagsInput from "../UI/TagsInput";

const AddBook = () => {
    const [book, setBook] = useState<BookInfos>({
        country_id: "FR",
        image_link: null,
        language: "",
        link: "",
        pages: 0,
        title: "",
        year: 1900,
        author: { author_id: 0, author_name: "" },
        genres: [],
    });

    function handleAuthor(author: Author) {
        setBook({ ...book, author });
    }
    function handleGenres(genres: Genre[]) {
        setBook({ ...book, genres: genres });
    }
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target;
        setBook({ ...book, [id]: value });
    }
    function handleCountry(event: React.ChangeEvent<HTMLSelectElement>) {
        setBook({ ...book, country_id: event.target.value });
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
            setBook({
                ...book,
                image_link: e.target.files[0],
            });
        }
    };
    const newBook = useAddBook();
    function handleSubmit() {
        newBook.mutate(book);
        console.log(book);
        console.log(baseImage);
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
                <TagsInput value={book.genres} handleGenres={handleGenres} />
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

export default AddBook;
