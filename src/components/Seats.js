import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Seat from "./Seat";

export default function Seats() { 

    const { idSessao } = useParams();
    const [movie, setMovie] = useState([]);
    const [day, setDay] = useState([]);
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promise.then((resposta) => {
            setMovie({...resposta.data.movie});
            setDay({...resposta.data.day});
            setSeats([...resposta.data.seats]);
        });
    }, []);

    return (
        <>
            <div className="sala">
                <div className="top">Selecione o(s) assento(s)</div>
                <div className="assentos">
                    {seats.map(seats => <Seat seat={seats.name} avaiable={seats.isAvaiable}/>)}
                    
                </div>
                <div className="guia">
                    <div className="guia-assentos">
                        <div className="bolinha selecionado"></div>
                        <div className="status">Selecionado</div>
                    </div>
                    <div className="guia-assentos">
                        <div className="bolinha disponivel"></div>
                        <div className="status">Disponivel</div>
                    </div>
                    <div className="guia-assentos">
                        <div className="bolinha indisponivel"></div>
                        <div className="status">Indisponível</div>
                    </div>
                </div>

            </div>
            
            <Footer poster={movie.posterURL}
                    titulo={movie.title}
                    dia={day.weekday}
                    data={day.date}/>

        </>
    );
}