import React from 'react';
import  Link  from "next/link";


function Menu () {
    return <div>
        <h2>Menu</h2>
        {/* <Link href='../index'><a >Main page</a></Link> */}
        <br />
        <Link href='../snake-game'><a >Snake</a></Link>
        <br />       
        <Link href='../4inarow'><a >4 in a row</a></Link>
        <br />
        <Link href='../WeatherWidget'><a >Weather</a></Link>
        <br />
        <Link href='../GameOfLife'><a >Game of life</a></Link>


        </div>

}

export default Menu
