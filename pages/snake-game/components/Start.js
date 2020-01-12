import React from 'react';

export default function StartGame (props) {

    return (
        <button className="start-button" type='button' onClick={props.onStart}>Start the Game</button>
    )
}