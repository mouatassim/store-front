import useGenre from "../../hooks/useGenre";
import "./Genres.css";

const Genres = () => {
  const {data:genres} = useGenre() 
  return (
    <div className="genres">
      {genres?.map((genre) => (
        <div key={genre.genre_id} className="stack">
          <button className="btn-variant" onClick={() => {}}>
            {genre.genre_name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Genres;
