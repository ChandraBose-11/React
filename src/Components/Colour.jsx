import React, { useContext } from 'react';
import { mycontext } from '../App';

const Colour = () => {
    const[color,setColor]=useContext(mycontext)
    const handlecolor=()=>{
        setColor("yellow")
       }
    return (
        <div>
            <h1>Colour</h1>
            <h1>comlor Name:{color}</h1>
            <button onClick={handlecolor}>click</button>
        </div>
    );
};

export default Colour;