import { Link } from "react-router-dom";

export default function Time({ time, idSession }) {
    return (
        <Link to={`/assentos/${idSession}`}>
            <div className='horario'>{time}</div>
        </Link>
        
    );
}