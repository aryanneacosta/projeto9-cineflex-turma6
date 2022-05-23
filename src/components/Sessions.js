import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Days from './Days';

export default function Sessions() {

    const { idFilme } = useParams();
    const [date, setDate] = useState([]);
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        promise.then((resposta) => {
            setDate([...resposta.data.days]);
            setMovie({...resposta.data});
        });
        }, []);

    return (
        <>
            <div className='sessoes'>
                <div className='top'>Selecione o horário</div>
                <div className='opcoes'>
                    {date.map((date, index) => <Days 
                        day={date.weekday} 
                        date={date.date} 
                        data={date}
                        index={index}/>
                    )}

                </div>
            </div>
            <Footer poster={movie.posterURL} 
                    titulo={movie.title} />
        </>
    );
}