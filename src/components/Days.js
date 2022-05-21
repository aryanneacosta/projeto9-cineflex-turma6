import { useState } from "react";
import { useEffect } from "react";
import Time from "./Time";

export default function Days({ day, date, data }) {

    const [time, setTime] = useState([]);

    useEffect(() => {
        setTime([...data.showtimes]);
    }, []);
    
    
    return (
        <>
            <div className='data'>{day} - {date}</div>
            <div className='horarios'>
                {time.map(time => <Time time={time.name} idSession={time.id}/>)}
            </div>
        </>
    );
}