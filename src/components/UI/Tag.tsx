import React from "react";
import Genre from "../../models/Genre";

interface TagProps {
    genre: Genre;
    handleDelete: (genreId: number) => void;
}

const Tag = ({ genre, handleDelete }: TagProps) => {
    return (
        <div style={{ display: "block" }}>
            <p
                key={genre.genre_id}
                style={{
                    background: "grey",
                    color: "white",
                    margin: "1px",
                    borderRadius: "5px",
                    padding: "7px",
                    display: "inline-block"
                }}
            >
                {genre?.genre_name.toString()}
            </p>
            <button
                onClick={() => handleDelete(genre.genre_id)}
                style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    padding: "5px",
                    marginLeft: "5px",
                    cursor: "pointer",
                    display: "inline-block"
                }}
            >
                X
            </button>
        </div>
    );
};

export default Tag;
