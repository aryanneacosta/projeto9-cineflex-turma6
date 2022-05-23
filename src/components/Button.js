import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Button({ idAssentos, buyer, cpf }) {

    const navigate = useNavigate();

    const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
        {
            ids: [idAssentos],
            name: { buyer },
            cpf: { cpf }
        });
    
    promise.then(navigate("/sucesso"));
    promise.catch(alert("Erro ao reservar os assentos"));

}