import React from 'react';

export default function Keyboard (props) {


    const handleClick = function (dir) {
        props.dir.setDirection(dir);
       
    }
    return (
        <div className='keyboard'>
            <div type="button" className='keyboard-inner-box' >
              <button className="btn-arrow" onClick={()=>{handleClick('up')}}> &uarr; </button>
            </div>
            <div className='keyboard-inner-box'>
                <button type="button" className="btn-arrow " onClick={()=>{handleClick('left')}}>  &larr; </button>
                <button type="button" className="btn-arrow " onClick={()=>{handleClick('right')}}> &rarr; </button>
              
            </div>
           
            <div className='keyboard-inner-box'>                
                <button type="button" onClick={()=>{handleClick('down')}} className="btn-arrow "> &darr; </button>
            </div>
           
                        
        </div>
    )
}