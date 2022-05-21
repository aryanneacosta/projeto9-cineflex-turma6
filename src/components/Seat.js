import { useState } from "react";

export default function Seat ({ seat, avaiable }) {

    const [isAvaiable, setIsAvaiable] = useState([avaiable]);

    if (!isAvaiable) {
        return (
            <div className="assento indisponivel">{seat}</div>
        );
    } else {
        return (
            <div className="assento disponivel">{seat}</div>
        );
    }
    
}