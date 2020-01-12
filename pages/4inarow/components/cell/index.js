import React  from 'react';


function Cell (props) {

    const getClassName = function (data) {
        switch (data) {
          case 1:
            return "cell player1";
          case 2:
            return "cell player2";
          default:
            return "cell blank";
        }
      }
     
    
   
    return (
      <div  className={getClassName(props.data)} >
        <style global jxs> {`
          
          .cell {
            border:1px solid white;
            padding: 20px;
            border-radius: 50%;
            height: 20px;
            width: 20px;
            text-align: center;
            background-color: #FFD1AA;
            margin: 10px;
            color: rgba(255, 0, 0, 0);
            -webkit-touch-callout: none; 
            -webkit-user-select: none;
             -khtml-user-select: none; 
               -moz-user-select: none; 
                -ms-user-select: none; 
                    user-select: none; 
          }
          .cell:hover {
            cursor: pointer; 
          }
          
          .cell.player1 {
            background: #55AA55;
          }
          
          .cell.player2 {
            background: #D46A6A;
          }
 
        `} </style>
        {props.data}
      </div>
    );
  }
 
 
export default Cell