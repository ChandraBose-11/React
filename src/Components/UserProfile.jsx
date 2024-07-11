import React, { useContext } from 'react';
import { mycontext } from '../App';

const UserProfile = () => {
    const[profile,setProfile]=useContext(mycontext)
   const handlesubmit=()=>{
    setProfile("Chandru")
   }
    return (
        <div>
            <h1>UserProfile</h1>
    <h1>this is name of the user:{profile}</h1>
        <button onClick={handlesubmit}>change Name</button>
        </div>
    );
};

export default UserProfile;