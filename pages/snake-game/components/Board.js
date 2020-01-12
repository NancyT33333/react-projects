import React from 'react';
import Pixel from './Pixel';


function Board(props) {
    
    const isEqual = function (a, b) {
      // if length is not equal 
      if( a.length != b.length ) {
        return false; 
        }
      else
      { 
      // comapring each element of array 
        for( var i = 0; i < a.length; i++ ) {
            if( a[i] != b[i] ) 
            return false; 
            }
        return true; 
      } 
    }
    const showPixels = function () {   
            
        return  props.state.board.map(function (el, index) { 
              const coord = [ Math.floor(index/10), index%10  ];

            // проверка в apples наличия el, штриховка красным 
               if (isEqual(props.state.apples, coord) ) {
                  return <Pixel el={index} className='apple' key={index} coord={coord}/>
               }
                 // проверка в rocks наличия el, штриховка черным 
               if (props.state.rocks.find((el) => {return isEqual(el, coord)}) ) {
                return <Pixel el={index} className='rock' key={index} coord={coord}/>
             }
             if (props.state.snake.find((el) => {return isEqual(el, coord)}) ) {
              return <Pixel el={index} className='snake' key={index} coord={coord}/>
           }
                return <Pixel el={index}  key={index} coord={coord}/>
            })
     }; 

    return (
      <div className="Board">
        
         {showPixels()} 
      </div>
    );
  }
  
  export default Board;
  