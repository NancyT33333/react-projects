import React, {useState, useEffect} from 'react';

import Table from '../table/index';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios';


function Game (props) {  
 
  const [field, setField] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [currentUser, setcurrentUser] = useState(1); 

  const move = function(columnId) {     
    
    axios.post('http://localhost:4000/game/move', {columnId, currentUser})
      .then((response) => {
        setField(response.data.field);
        setcurrentUser(response.data.currentUser);
        setLoaded(true);       
  
      }).catch((err) => {
        alert('Ошибка запроса');
      })
   };

   const refresh = function() {
    axios.post('http://localhost:4000/game/reset', {}) 
    .then((response)=> {
      setField(response.data.field);
        setcurrentUser(response.data.currentUser)
        setLoaded(true);
    }).catch((err) => {
      alert('Ошибка запроса');
    })
   };
   
  useEffect( function (){  
    const id = setInterval(()=> { axios.get("http://localhost:4000/game/status").then(function (response) {
                  setField(response.data.field);
                  setcurrentUser(response.data.currentUser)
                  setLoaded(true);             
            }).catch((err) => {
              alert('Ошибка запроса');
            });
          }, 2000);
    return  () => {
          clearInterval(id);
         }
}, []);

    const winner = 'Masha';
    if (!props.location.state) {
        return <Redirect to="/"/>
    }
    return (<div className="center">        
              <header >
                <div> 
  {props.location.state.player1Name} vs 
                     {" "+props.location.state.player2Name}
                </div>
                <div className="game-info">Next move</div>
                <button className='btnRefresh' onClick={refresh}>Refresh</button>
              </header>

              { loaded ?  <Table className='table' data={field} onColumnClick={move}/> : <span>Loading</span> }              
              
            </div>) 

}

export default Game;