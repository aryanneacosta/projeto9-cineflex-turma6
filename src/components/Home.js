import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sessions from './Sessions';

export default function Home() {

    function Movies({ movies, idFilme }) {
        return (
            <Link to={`/sessoes/${idFilme}`}>
                <div className="movie">
                    <img src={movies} alt="filme" />
                    {/* imagens da API */}
                </div>
            </Link>
        );
    }

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((resposta) => {
            setMovies([...resposta.data]);
        });
    }, []);

    return (
        <>
            <div className="top">Selecione o filme</div>
            <div className="movies">
                {movies.map(movie => <Movies movies={movie.posterURL} idFilme={movie.id}/>)}
            </div>
        </>
    );
}