import React from 'react';
import { useState } from 'react';
import phrases from '../phrases.json'

const Message = () => {

    const getRandom = () => Math.floor(Math.random()* phrases.length)
   
     
    const colors = ["#D65DB1","#FF9671","#FFC75F","#008E9B","#F9F871","#B39CD0","#FF8066","#00C2A8"]
    
    const color = colors[Math.floor(Math.random()*8)]
  
    document.body.style = `background:${color}`
  
    const [phrase, setPhrase] = useState(phrases[getRandom()])
    const changePhrase = () => {

      setPhrase(phrases[getRandom()])
       
    }
    return (
        <div className="card" style={{color:color}}>
            <p><i className="fa-solid fa-quote-left"></i>{phrase.quote} </p>
            <span>{phrase.author} </span>
            <br />
            <button onClick={changePhrase} style={{background : color}}>
                <i className="fa-solid fa-shuffle"></i>
            </button>
        
       </div>
    );
};

export default Message;
