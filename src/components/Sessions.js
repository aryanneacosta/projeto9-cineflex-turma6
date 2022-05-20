import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Footer from './Footer';

export default function Sessions() {

    function Days({ day }) {
        return (
            <>
                <div className='data'>{day} - 25/06/2021</div>
                <div className='horarios'>
                    <div className='horario'>15:00</div>
                    <div className='horario'>16:00</div>
                </div>
            </>
        );
    }

    const { idFilme } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        promise.then(resposta => {
            setMovie({ ...resposta.data })
        });
    }, [])

    return (
        <>
            <div className='sessoes'>
                <div className='top'>Selecione o horário</div>
                <div className='opcoes'>
                    
                    {movie.map(day => <Days day={movie.days[day].weekday} />)}

                </div>
            </div>
            <Footer poster={movie.posterURL} titulo={movie.title} />
        </>
    );
}