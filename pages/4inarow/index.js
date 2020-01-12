import React from 'react';

import Game from './components/game/game';
import { HashRouter, Route } from 'react-router-dom';
import Welcome from './welcome/welcome';
import Gameover from './components/gameover/gameover';

function App () {
  
  return (<HashRouter>
    <style global jsx>{`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #FFD1AA;
}
.center {
  text-align: center;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

.game-info {
    font-size: 2em; 
}

header{
  margin: 0; padding: 1em 5em 4em; color: #efefef;
  overflow:hidden;
  position: relative;
  text-align: center;
}

h1{
  text-align: center;
  font-size: 1.5em;
}

header::after{
  content:"";
  position:absolute;
  top:0;
  left:0;
  height: 100%;
  width:100%;
  transform: skewY(-4deg);
  background: red;
  transform-origin: bottom left;
  z-index: -1;
}

header::before{
  content:"";
  position:absolute;
  top:0;
  left:0;
  height: 100%;
  width:100%;
  transform: skewY(8deg);
  background: red;
  transform-origin: bottom right;
  z-index: -1;
}

header{
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  }
.div_players {
  text-align: center;
}
.div_players input {
  margin-left: 10px;
}

.btnRefresh {   
  display: inline-block;
  width: 100px;
  zoom: 1;
  padding: 6px 20px;
  margin-top: 15px;
  cursor: pointer;
  border: 1px solid #bbb;
  overflow: visible;
  font: bold 13px arial, helvetica, sans-serif;
  text-decoration: none;
  white-space: nowrap;
  color: #555;
  background-color: #ddd;
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,1)), to(rgba(255,255,255,0)));
  transition: background-color .2s ease-out;
  background-clip: padding-box; /* Fix bleeding */
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, .3), 0 2px 2px -1px rgba(0, 0, 0, .5), 0 1px 0 rgba(255, 255, 255, .3) inset;
  text-shadow: 0 1px 0 rgba(255,255,255, .9);
  user-select: none;
}
    `}</style>
    <Route path="/" exact component={Welcome}></Route>
    <Route path="/game" component={Game}></Route>
    <Route path="/gameover" component={Gameover}></Route>
    
    </HashRouter>)
}



export default App;
