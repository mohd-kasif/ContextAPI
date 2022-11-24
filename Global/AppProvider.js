import React, { useState,createContext } from "react";

const Context=createContext();

const AppProvider=(props)=>{

  const [val,setVal]=useState(0);
  const [val1,setVal1]=useState(1);

  return(
  <Context.Provider value={{val,setVal,val1,setVal1}}>
  {props.children}
  </Context.Provider>
  )

}

export {Context,AppProvider}
