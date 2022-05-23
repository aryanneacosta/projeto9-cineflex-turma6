import { Link } from "react-router-dom";
import Seats from "./Seat";

export default function Success() {
    return (
        <>
            <div className="top sucesso">
                <p>Pedido feito</p>
                <p>com sucesso!</p>
            </div>
            <div className="infos">
                <div className="titulo">Filme e sessão</div>
                <div className="texto"></div>
                <div className="texto"></div>
            </div>
            <div className="infos">
                <div className="titulo">Ingressos</div>
                <div className="texto"></div>
            </div>
            <div className="infos">
                <div className="titulo">Comprador</div>
                <div className="texto">Nome: </div>
                <div className="texto">CPF: </div>
            </div>
            <div className="botoes">
            <Link to="/">
                <div className="botao">
                    Voltar pra Home
                </div>
            </Link >
        </div >
        </>
    );
}