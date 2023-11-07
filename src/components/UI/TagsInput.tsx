import React, { useState } from "react";
import useGenre from "../../hooks/useGenre";
import Genre from "../../models/Genre";
import Tag from "./Tag";

interface Props {
    value: Genre[];
    handleGenres: (genres: Genre[]) => void;
}

const TagsInput = ({ value, handleGenres }: Props) => {
    const { data: genres } = useGenre();
    const [inputValue, setInputValue] = useState("");

    function addGenre(genre: Genre) {
        handleGenres([...value, genre]);
        setInputValue("");
    }

    function handleGenreChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }

    const filteredGenres = genres?.filter((genre) =>
        genre.genre_name.toLowerCase().includes(inputValue.toLowerCase())
    );

    function removeGenre(genreId: number) {
        const updatedGenres = value.filter(
            (genre) => genre.genre_id !== genreId
        );
        handleGenres(updatedGenres);
    }

    return (
        <div className="form-group">
            <label>Genres</label>
            <div className="ligne-group">
                <input
                    id={"genre"}
                    type="text"
                    value={inputValue}
                    onChange={(e) => handleGenreChange(e)}
                    list="genres"
                />
                <datalist id="genres">
                    {filteredGenres?.map((genre) => (
                        <option
                            value={genre.genre_name}
                            key={genre.genre_id}
                            onClick={() => addGenre(genre)}
                        >
                            {genre.genre_name}
                        </option>
                    ))}
                </datalist>
                <button
                    className="btn btn-secondry"
                    onClick={() => {
                        const selectedGenre = genres?.find(
                            (genre) =>
                                genre.genre_name.toLowerCase() ===
                                inputValue.toLowerCase()
                        );
                        if (selectedGenre) {
                            if (!value.includes(selectedGenre)) {
                                addGenre(selectedGenre);
                            } else {
                                setInputValue("");
                            }
                        } else {
                            addGenre({
                                genre_id: -1,
                                genre_name: inputValue,
                            });
                        }
                    }}
                >
                    +
                </button>
            </div>
            <div style={{ marginTop: "1rem" }}>
                {value.map((genre, index) => (
                    <Tag
                        key={
                            genre.genre_id > 0
                                ? genre.genre_id
                                : genre.genre_id * index
                        }
                        genre={genre}
                        handleDelete={removeGenre}
                    />
                ))}
            </div>
        </div>
    );
};

export default TagsInput;
