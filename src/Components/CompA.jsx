import React, { useContext } from 'react';
import { mycontext } from '../App';

const CompA = () => {
    const[ContextValue,SetContextValue]=useContext(mycontext)
    const handlesubmit=()=>{
        SetContextValue(val=>val+1)
    }
    
    return (
        <div>
              <h1>Component A</h1>
            <h1 style={{color:"green"}}>the value of:{ContextValue}</h1>
            <button onClick={handlesubmit}>Click</button>
        </div>
    );
};

export default CompA;