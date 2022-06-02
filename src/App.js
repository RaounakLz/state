import React, { useState } from 'react'
import "./App.css";
import me from "./me.jpg";
function App() {
 const [person, setperson] = useState({
   name:"Raounak Lazrag",
    bio:"Extrêmement motivé pour developper constamment mes compétences et évoluer professionnellement"
    , 
    img:"gg", 
    profession: "Technicienne en Assurance"})
 const [show, setshow] = useState(false)
 const [timer, setTimer] = useState(0);
  return (
    <div className='app'>
    <div className='box' >
      <button classeName="bouton2"onClick={()=>setshow(!show)}>click here to show</button>
      {show?
      <div className='card'>
      <img src={me}/>
      <h1>{person.name}</h1>
      <p>{person.bio}</p>
      <p>{person.profession}</p>
      </div>: null}
      <h1>{timer}</h1>

      <button className="bouton2" onClick={()=>setTimer(timer+1)}>count</button>
    </div> 
    </div>
  );
}

export default App

  