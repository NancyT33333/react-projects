import React from 'react';

import Cell from '../cell/index';

function Column (props) {  
    const showCells = function (data) {
        return data.map((el, index) => <Cell data={el} key={index}/>);
    };    
    const onClick = function () {
        props.onClick(props.index);
      }
     
    return (
        <div className="column" onClick={onClick}>
            {showCells(props.data)}
        </div>
    );
    
}
export default Column;