import React from 'react';
import Menu from '../pages/Menu';
// import Background from '../public/wallhaven-39gogv.jpg';


export default function ({children}) {

  // var sectionStyle = {
   
  //   backgroundImage: "url(" +  Background  + ")"
  // };
 return (
   <div className="background" >
     <Menu />
     <div>
       {children}
     </div>
     <style global jsx>{`
        * {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: #081826;
          color: #A8B5BF;
          text-align: center; 
          
          
         }

     
       `}</style>
{/* <style jsx>{`
* {
  background: center / contain no-repeat url("/wallhaven-39gogv.jpg") #081826;
}`}</style> */}
   </div>
 )
}

