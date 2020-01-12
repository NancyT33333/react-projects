import React from 'react';
import Pixel from "../pixel";

import {pressCell, deleteCell} from "../../store/actionCreators";
import {connect} from 'react-redux';

import {compareArrays, isArrInArr } from  "../../myLib";

const Board = function (props) {
    const board = Array(3200).fill([0,0]);

    const createPixels = function () {
    return board.map( (el, ind) => { 
        // =================counting coords============================

        const Y = ind - Math.floor(ind / 80) * 80;
        const X = (ind - Y) / 80;
        let bAlive = false;
        props.alivePixels.map ((i) => { if ( compareArrays(i, [X,Y]) === true ) { bAlive = true } } );
      
        return  <Pixel bAlive={bAlive}  key = {ind}  coords = {[X, Y]} onClick={() =>{
            if (!isArrInArr([X, Y], props.alivePixels )) { // checks if this cell is not alive already
                props.pressCell([X, Y]);
            } else { // deletes cell
                props.deleteCell([X, Y]);
            }
        }}/>
    });
        
    }
    return (
    <div className="Board">        
        {createPixels()}
    </div>)
}



export default connect((store) => store, {pressCell, deleteCell}) (Board);