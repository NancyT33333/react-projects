
import React from 'react';

import Column from '../column/index.js';


function Table (props) {
    
    const showColumns = function(data) {
        
        return data.map((el, index) => <Column key={index} onClick={props.onColumnClick} data={el} index={index} />);
    }
   
    
    return (
    <div className="table">
        {showColumns(props.data)}
    <style jsx global> {`
        .table {
            display: flex;
            justify-content: space-around;
            margin: 100px auto;
            border: 1px solid white;
            width: 600px;
            background-color: #D49A6A;
            padding: 10px;
            margin-top: 10px;
           }
           
    `}</style>
    </div>
    );
    
    
}
    export default Table;