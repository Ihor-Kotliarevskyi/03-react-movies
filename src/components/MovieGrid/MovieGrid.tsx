import type Movie from "../../types/movie";
import css from "./MovieGrid.module.css";

interface MovieGridProps {
  items: Movie[];
  onClick: () => void;
}

function MovieGrid({ items, onClick }: MovieGridProps) {
  return (
    <ul className={css.grid}>
      {items.map(({ id, poster_path, title }) => (
        <li onClick={onClick} key={id}>
          <div className={css.card}>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              loading="lazy"
            />
            <h2 className={css.title}>{title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MovieGrid;
