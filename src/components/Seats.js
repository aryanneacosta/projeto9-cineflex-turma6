import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Seat from "./Seat";
import Button from "./Button";

export default function Seats({ choosen, setChoosen }) {

    const { idSessao } = useParams();
    const [movie, setMovie] = useState([]);
    const [day, setDay] = useState([]);
    const [seats, setSeats] = useState([]);

    const [buyer, setBuyer] = useState('');
    const [cpf, setCpf] = useState('');

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promise.then((resposta) => {
            setMovie({ ...resposta.data.movie });
            setDay({ ...resposta.data.day });
            setSeats([...resposta.data.seats]);
        });
    }, []);

    return (
        <>
            <div className="sala">
                <div className="top">Selecione o(s) assento(s)</div>
                <div className="assentos">
                    {seats.map((seats, index) => <Seat
                        id={seats.id}
                        seat={seats.name}
                        available={seats.isAvailable}
                        choosen={choosen}
                        setChoosen={setChoosen}
                        index={index}
                    />)}


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
            <div className="input">
                <div className="nome-comprador">Nome do comprador:</div>
                <input type="text"
                    placeholder="Digite seu nome..."
                    value={buyer}
                    onChange={(event) => setBuyer(event.target.value)} />
                <div className="cpf-comprador">CPF do comprador:</div>
                <input type="text"
                    placeholder="Digite seu CPF..."
                    value={cpf}
                    onChange={(event) => setCpf(event.target.value)} />
            </div>


            <div className="botoes">
                <div className="botao" 
                    onClick={() => <Button idAssentos={choosen}
                    buyer={buyer}
                    cpf={cpf} />}>
                    Reservar assento(s)
                </div>
            </div >

            <Footer poster={movie.posterURL}
                titulo={movie.title}
                dia={day.weekday}
                data={day.date} />

        </>
    );
}