import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Movies from './Movies';

export default function Home() {

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