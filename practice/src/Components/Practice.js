import react from "react";

import { useState } from "react";

const Practice = (props) => {

    const[state,setState]= useState("");

    const change=(e)=>{
      setState(e.target.value)
    }
   
     const btclicked=()=>{
       setState(state+1)
       props.onck(state);
     }
  return (
  <div>
      <input type="number" value={state} onChange={change} ></input>
      <button onClick={btclicked}>click here</button>
  </div>);
};

export default Practice;
