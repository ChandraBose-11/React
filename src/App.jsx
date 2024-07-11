import React, { createContext, useState } from "react";
import CompA from "./Components/CompA";
import CompC from "./Components/CompC";
import CompD from "./Components/CompD";
import UserProfile from "./Components/UserProfile";
import Colour from "./Components/Colour";


export const mycontext = createContext('');
const App = () => {
  const [ContextValue, SetContextValue] = useState(0);
  const[profile,setProfile]=useState("ChandraBose")
  const[color,setColor]=useState("blue")
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "blueviolet" }}>
        App Components
      </h1>
      <h1>The value of:{ContextValue}</h1> 
       <mycontext.Provider value={[ContextValue,SetContextValue]}>
        {/* //Childcomponents */}
         <CompA />
        <CompC />
        <CompD/>
      </mycontext.Provider> 
      <mycontext.Provider value={[profile,setProfile]}>
        <UserProfile/>
      </mycontext.Provider>
      <mycontext.Provider value={[color,setColor]}>
        <Colour/>
      </mycontext.Provider>
    </div>
  );
};

export default App;
