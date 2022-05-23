import { useState } from "react";

export default function Seat({ id, seat, available }) {

    const [clicked, setClicked] = useState(false);


    if (!available) {
        return (
            <div className="assento indisponivel"
                onClick={() => {
                    alert("Esse assento não está disponível")
                }}
            >{seat}</div>
        );
    } else {
        if (!clicked) {
            return (
                <div className="assento disponivel" onClick={() => setClicked(!clicked)}
                > {seat}</div>
            )
        } else {

            return (
                <div className="assento selecionado" onClick={() => setClicked(!clicked)}
                > {seat}</div>
            )
        }
    }

}