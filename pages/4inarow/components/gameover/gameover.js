import React from 'react';
import {Link} from 'react-router-dom';



function Gameover (props) {
    return(
        <div className="center">
       <h1>Gameover</h1>
       <p className = "fontsz2">Winner is {props.location.state.winner}</p>
       <Link to={{pathname: "/"}}>Play again</Link>
       </div>
    )
}

export default Gameover;