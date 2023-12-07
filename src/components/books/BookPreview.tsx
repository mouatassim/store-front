import { BookInfos } from "../../models/Book";

interface Props {
    book: BookInfos;
}
const BookPreview = ({ book }: Props) => {
    console.log(book);
    
    return (
        <div className="preview container">
            <div className="preview__head">
                <div>
                    <h2>{book.title}</h2>
                    <h3 className="text-secondary">{book.author.author_name}</h3>
                    <p><strong>Country</strong> {book.country_id}</p>
                    <p><strong>Pages</strong> {book.pages}</p>
                    <p><strong>Language</strong> {book.language}</p>
                    <b>genres:</b>
                    <ul className="list">
                        {book.genres.map(genre=><li className="list__item">{genre != book.genres.at(-1)?', ':'.'}</li>)}
                    </ul>
                    
                </div>
                <img
                    src={`http://localhost:5000/static/${book.image_link}`}
                    alt={book.title}
                />
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                animi esse impedit obcaecati asperiores, labore ad veniam. Esse,
                velit enim!
            </p>
        </div>
    );
};

export default BookPreview;
