import React, {useState, useRef} from 'react';

// import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import StartGame from './components/Start';
import LostWindow from './components/LostWindow';


function App() {
  
  const [apples, setApples] = useState([1,8]);
  const [rocks, setRocks] = useState([[0,1]]);
  const [snake, setSnake] =  useState([[1,2], [1,3], [1,4]]);
  const [direction, setDirection] = useState ("right");
  const [bLost, setBLost] = useState(false);
  const snakeRef = useRef(snake);
  snakeRef.current = snake;
  const dirRef = useRef(direction);
  dirRef.current = direction;
  const applesRef = useRef(apples);
  applesRef.current = apples;
  const [fieldWidth, setFieldWidth] = useState(10);  

  const bArrEqual = function (a, b) {
    // if length is not equal 
    if( a.length != b.length ) {
      return false; 
      }
    else
    { 
    // comparing each element of array 
      for( var i = 0; i < a.length; i++ ) {
          if( a[i] != b[i] ) 
          return false; 
          }
      return true; 
    } 
  }
//============================================================================
  const onStart = function () {  
    let timerId = setTimeout(function move () {
    //=============================start of move======================================
      let tmp_snake, nextStep ;
      let snake = snakeRef.current;
      setSnake([[1,2], [1,3], [1,4]]);  // resetting to default value

      //============================start of check collision==============================
      const checkCollison = function () { // returns true if collision
        switch (dirRef.current) {
          case "right":
            nextStep = [snake[snake.length-1][0], snake[snake.length-1][1]+1];
            for (let i = 0; i < rocks.length; i++) {
              if (bArrEqual(rocks[i], nextStep )) {
                 return true 
                }                
            }  
            return checkForSelfCollision(nextStep) ? true : false;

            
          case "down":            

            nextStep = [snake[snake.length-1][0]+1, snake[snake.length-1][1]];
            for (let i = 0; i < rocks.length; i++) {
              if (bArrEqual(rocks[i], nextStep )) {
                 return true 
                }
            }              
            return checkForSelfCollision(nextStep) ? true : false;
          case "left":            

            nextStep = [snake[snake.length-1][0], snake[snake.length-1][1]-1];
            for (let i = 0; i < rocks.length; i++) {
              if (bArrEqual(rocks[i], nextStep )) {
                 return true ;
                }
            }              
            return checkForSelfCollision(nextStep) ? true : false;
          case "up":             

            nextStep = [snake[snake.length-1][0]-1, snake[snake.length-1][1]];
            for (let i = 0; i < rocks.length; i++) {
              if (bArrEqual(rocks[i], nextStep )) {
                 return true 
                }
            }              
            return checkForSelfCollision(nextStep) ? true : false;
        }
      };

      const checkForSelfCollision = function (nextStep) {
        for (let j = 0; j < snake.length; j++) {
          if (bArrEqual(nextStep, snake[j])) { return true };
        }
        return false;
      };

      //===========================end of check for collision===========================
      switch (dirRef.current) {
      
        case "right":     
            if ((snake[snake.length-1][1]+1 !== fieldWidth) && (!checkCollison())) {            
              tmp_snake = snake.slice(1);
              tmp_snake.push([snake[snake.length-1][0], snake[snake.length-1][1]+1]);            
              setSnake(tmp_snake);           
              timerId = setTimeout(move, 500);           
              break;
          } else {
            alert("you loose!");
            // setBLost(true);
            return
          }
          
        case "down":
          if ((snake[snake.length-1][0]+1 !== fieldWidth) && (!checkCollison())) {            
            tmp_snake = snake.slice(1);
            tmp_snake.push([snake[snake.length-1][0]+1, snake[snake.length-1][1]]);            
            setSnake(tmp_snake);           
            timerId = setTimeout(move, 500);           
            break;
        } else {
          alert("you loose!");
          // setBLost(true);
          return
        }

        case "left":
            if ( (snake[snake.length-1][1]-1 !== -1) && !checkCollison() ) {            
              tmp_snake = snake.slice(1);
              tmp_snake.push([snake[snake.length-1][0], snake[snake.length-1][1]-1]);            
              setSnake(tmp_snake);           
              timerId = setTimeout(move, 500);           
              break;
          } else {
            alert("you loose!");
            // setBLost(true);
            return
          }
          
        case 'up':
            if ( (snake[snake.length-1][0]-1 !== -1) && (!checkCollison()) ) {   
              // const next_step = ...; checkCollision(next_step), checkApple(next_step)
              
              tmp_snake = snake.slice(1);
              tmp_snake.push([snake[snake.length-1][0]-1, snake[snake.length-1][1]]);            
              setSnake(tmp_snake);           
              timerId = setTimeout(move, 500);           
              break;
          } else {
            alert("you loose!");
            // setBLost(true);
            return
          }
         
      }
      //=====================logic for eating apples==============================
      const lastAddedPixel = [tmp_snake[tmp_snake.length-1][0], tmp_snake[tmp_snake.length-1][1]];
     
        if (bArrEqual(applesRef.current, lastAddedPixel)) {            //if last added pixel was an apple - grow          
            setSnake([snake[0], ...tmp_snake]);   // !! 
       
            function createApple() {  
              const x = random(0, 9);
              const y = random(0, 9);              
              setApples( [x,y]);
              tmp_snake.concat(rocks).forEach(function isAppleOnSnake(part) {    
                const foodIsOnSnake = part[0] == applesRef.current[0] && part[1] == applesRef.current[1] ; 
                 if (foodIsOnSnake)   {   createApple();  };
               });
            }  
            createApple();
            
        }

      

      //====================end of move================================
    }, 500);
  }
  function random(min, max) { 
    return Math.round((Math.random() * (max-min) + min));
  }

 
 

  function showLostWindow () {
    return bLost ? <LostWindow onPressStartAgain={()=>{setBLost(false)}}></LostWindow> : null;
  }

  function onKeyPressed(key) {
    switch (key) {
      case 'ArrowUp':
        return 'up';
      case 'ArrowDown':
       return 'down';
      case 'ArrowLeft':
        return 'left';
      case 'ArrowRight':
        return 'right';
    }
  }

  
  return (
 
      <div className="App" onKeyDown = {(e) => setDirection(onKeyPressed(e.key))} tabIndex="0">
         <style jsx global>{`
      .App {
        text-align: center;
        display: block;
      
      }
      body {
        margin: 0;
        /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif; */
      
          font-family: 'VT323', monospace;
      
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: black;
      }
      
      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
          monospace;
      }
      
      .Pixel {
        width: 10px;
        height: 10px;
        border: 1.5px solid white;
        display: inline-block;
        margin: 0px;
      }
      
      .apple {
        background-color: #F20505;
        border-radius: 50%;
      }
      
      .rock {
        background-color: gray;
        border-radius: 50%;
        
      }
      
      .snake {
        background-color: #15ff00;
      }
      
      .Board {
        width: 130px;
        height: 130px;
        
        display: block;
        margin: 13vh auto 5vh;
        line-height: 0%;
      
      }
      
      .white {
        background: white;
      }
      
      .keyboard {
        
        position: fixed;
        left: 0;
        top: 50%;
        width: 100%;
        
        margin: 0 auto; 
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        
        
      }
      
      .keyboard-inner-box {
        
        width: 135px;
        display: flex;
        justify-content: center;
        
      }
      
      .keyboard-inner-box:nth-of-type(2) {
        justify-content: space-between;
      }
      
      .btn-arrow {
        padding: 0 20px;
        font-family: 'VT323', monospace;
        font-size: 1.5rem;
        color: 	#A9A9A9;
        width: 35px;
        height: 44px;
        border-radius: 0%;
        text-indent: -8px;
      
      }
      
      .start-button {
        color: #03FE03;
        font-size: 2em;
        font-family: 'VT323', monospace;
        text-decoration: underline;
        background-color: rgba(0,0,0,0);
      }
      
      .lost-window {
        
          display: block;
          width: 150px;
          height: 150px;
          position: fixed;
      
          background-color: #33414E;
          text-align: center;
          bottom: calc(50% - 75px);
          left: calc(50% - 75px);   
          box-shadow: 9px 10px 16px -12px rgba(0,0,0,0.75);
      }
     `}</style>

        <StartGame onStart={onStart}></StartGame>
          <Board state={{board: Array(100).fill(0),
              apples,
              rocks,
              snake,
              setApples,
              setRocks,
              setSnake, direction, setDirection
              }} >  </Board>

            <Keyboard dir={{direction, setDirection}}  />

            {showLostWindow()}  {/* is it legal? */}
            
          
      </div>
    
  );
}

export default App;
