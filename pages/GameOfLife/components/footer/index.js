import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { pressStep, pressClear } from "../../store/actionCreators";
import { getOccurrence, isArrInArr, compareArrays } from "../../myLib";


function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

const generateNeighbours = function (alivePixels) {
    let listOfNeighbours = [];
    for ( let i of alivePixels ) {
         let X = i[0];
         let Y = i[1];
         listOfNeighbours.push([X-1, Y-1], [X, Y-1], [X+1, Y-1], [X+1, Y], [X+1, Y+1], [X, Y+1], [X-1, Y+1], [X-1, Y]);
    }
    return listOfNeighbours;
}

const makeNewCells = function (props) {
    
    let listOfNeighbours = generateNeighbours(props.alivePixels);   
    let cellsToAdd = [], cellsToDelete = [];
    for (let i of listOfNeighbours) { 
        const occurenceNum = getOccurrence(listOfNeighbours, i);
        if ( occurenceNum > 4) {
          // check, if it is in alivePixels -- delete 
          if (isArrInArr(i, props.alivePixels)) { cellsToDelete.push(i)} ;
        } else if ( occurenceNum === 3  ) {
            // if 3 and not populated - populate
            if (!isArrInArr(i, props.alivePixels) ) { if ( !isArrInArr(i, cellsToAdd)) {cellsToAdd.push(i)} };
        }
    }   
    for (let i of props.alivePixels) { // check standalone populated cells to delete (if no or one of neighbours is populated)
        const neighbours = generateNeighbours([i]);
        let aliveNeighbours = 0;
        for (let j of neighbours) {
            if (getOccurrence(props.alivePixels, j) === 1) { aliveNeighbours++ }
        }
        switch (aliveNeighbours) {
            case 0:
            case 1:
            case 4:
                cellsToDelete.push(i);          

        }
        
    } 
    for ( let i of cellsToAdd ) { //check if coords don't exceed max X and Y of field
        if ( i[0] > 39 || i[1] > 79 ) { cellsToAdd = cellsToAdd.filter( el => !compareArrays (el, i))}
    }
    props.pressStep(cellsToAdd, cellsToDelete); // takes cellsToAdd, cellsToDelete
}

const Footer = function (props) {
    let [isGameOn, setIsGameOn] = useState (false);
    let [delay, setDelay ] = useState (500); 
    const onStart = function () {
        if (!isGameOn ) {
            setIsGameOn(true);   
        }
    }
    const onStop = function () {
        if (isGameOn) {
            setIsGameOn(false);
        }
    }
    useInterval(() => {
        makeNewCells(props)
      }, isGameOn ? delay : null);
    
    const changeSpeed = function (value) {
        switch ( value ) {
            case "fast":
                setDelay(500);
                break
            case "really fast":
                setDelay(250); 
                break               
            case "moderate":
                setDelay(1000);
                break
            case "meditative":
                setDelay(1500);
                break
        }
    }

    return (
    <div>
        <input type="button" value = "step" onClick={ () => {makeNewCells(props)} }/>
        <input type="button" value = "clear" onClick={  props.pressClear }/>
        <input type="button" value = "start" onClick ={ onStart }/>
        <input type="button" value = "stop" onClick={ onStop } />
        <select onChange={ (event) => {changeSpeed(event.target.value) }}>
            <option value="fast">fast</option>
            <option value="really fast">really fast</option>
            <option value="moderate">moderate</option>
            <option value="meditative">meditative</option>
        </select>
    </div>
    )
}

export default connect ((store) => store, { pressStep, pressClear }) (Footer)