import React from 'react';

import { HashRouter, Route } from 'react-router-dom';
import Widget from "./components/Widget"; 

function App() { 

  return (
    <HashRouter>   
<style global jsx>{`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #071421;
  color: rgb(162, 175, 187);
}

.App {
  text-align: center;
}



.outerDiv {

  position: relative;
}

.p_pseudoForm {
  margin: 0px calc(30vw);
  width: 40vw;
}

.p_pseudoForm input {
  border: 1px solid #555;
  background-color: rgb(159, 172, 185);
  padding: 5px;
  box-shadow: 9px 10px 16px -12px rgba(0,0,0,0.75);
  color: #11212F;
  font-family: inherit;
  
}
.p_pseudoForm input:nth-of-type(1) {
  width: 80%;

}


.p_pseudoForm input:nth-of-type(2) {
  background-color: #AB9576;
  color: #493517;

}
.outerDiv h1 {
  text-align: center;
}

`}</style>        
      <Route exact path="/" component={Widget} />     
    </HashRouter>
  );
}

export default App;
