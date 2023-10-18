import "./Genres.css";

const Genres = () => {
  const genres = [
    {
      id: 0,
      name: "Tous",
    },
    {
      id: 1,
      name: "Romance",
    },
    {
      id: 2,
      name: "Language",
    },
    {
      id: 3,
      name: "Programming",
    },
    {
      id: 4,
      name: "History",
    },
    {
      id: 5,
      name: "Police",
    },
  ];
  return (
    <div className="genres">
      {genres.map((genre) => (
        <div key={genre.id} className="stack">
          <button className="btn-variant" onClick={() => {}}>
            {genre.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Genres;
