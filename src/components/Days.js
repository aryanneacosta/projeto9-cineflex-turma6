import { useState } from "react";
import { useEffect } from "react";

export default function Days({ day, date, data }) {
    
    function Time ({ time }) {
        return (
            <div className='horario'>{time}</div>
        );
    }

    const [time, setTime] = useState([]);
    useEffect(() => {
        setTime([...data.showtimes]);
    }, []);
    console.log(time)
    
    return (
        <>
            <div className='data'>{day} - {date}</div>
            <div className='horarios'>
                {time.map(time => <Time time={time.name} />)}
            </div>
        </>
    );
}