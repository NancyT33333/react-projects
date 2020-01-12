import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useState, useRef} from "react";



function Welcome () {
    const [player1, setPlayer1] = useState("John Doe");
    const [player2, setPlayer2] = useState("Jane Doe");

    const player2Input = useRef();

    function click() {
        player2Input.current.focus(); 
    }
    axios.post('http://localhost:4000/game/reset', {}) ;
    return (<div>
        <h1>Welcome!</h1><br/>
        <div className="div_players">
            <p>Player Name 
                <input type="text"  onChange={(event)=>{
                    setPlayer1(event.target.value);
                }}>
                </input>
            </p>
            <p ref={player2Input} onClick={click}>Player Name
                <input type="text" onChange={(event)=>{
                    setPlayer2(event.target.value);
                }}></input>
            </p>
        </div>
        <h1>
            <Link to={{
            pathname: '/game',
            state: {
                player1Name: player1,
                player2Name: player2
                        }    
            }}>Начать игру</Link>
        </h1>
  
    </div>)}

    



  export default Welcome;
  