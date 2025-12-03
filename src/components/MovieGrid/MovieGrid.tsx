import type Movie from "../../types/movie";
import css from "./MovieGrid.module.css";

interface MovieGridProps {
  items: Movie[];
}

function MovieGrid({ items }: MovieGridProps) {
  return (
    <ul className={css.grid}>
      {items.map(({ objectID, url, title }) => (
        <li>
          {objectID}
          <div className={css.card}>
            <img className={css.image} src={url} alt={title} loading="lazy" />
            <h2 className={css.title}>{title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MovieGrid;
