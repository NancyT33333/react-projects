import React from 'react';

import Panel from "./components/header-panel";
import {Provider} from "react-redux";
import store from "./store";
import Footer from "./components/footer";

import dynamic from "next/dynamic";

const Board = dynamic(
  () => import('./components/board'),
  { ssr: false }
)

function App() {
  return (
    <Provider store={store}>
      <style jsx global>{`
    .App {
      text-align: center;
    }
    
    .Board {
      border: 1px solid #A8B5BF;
      display: flex;
      width: 944px;
      margin: 0 auto;
      flex-wrap: wrap;  
    }
    
    .Pixel {
      display: block;
      border: 0.5px solid #A8B5BF;
      width: 10px;
      height: 10px;
      justify-content: space-around;
      margin: 0.4px; 
    }
    
    .alive {
      background: #F2CC0C;
    }
    
    .button {
      background-color: #A69076;
      color: #3B4E59;
    }
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: #081826;
      color: #A8B5BF;
      font-size: 1.3em;
    }
    
    
      `}</style>
      <div className="App">
        <Panel></Panel>
        <Board></Board>

        <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
