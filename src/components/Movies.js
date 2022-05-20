import { Link } from "react-router-dom";

export default function Movies({ movies, idFilme }) {
    return (
        <Link to={`/sessoes/${idFilme}`}>
            <div className="movie">
                <img src={movies} alt="filme" />
                {/* imagens da API */}
            </div>
        </Link>
    );
}