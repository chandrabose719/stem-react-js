import React from "react";

import Header from './Header';

export default function Layout(props){
  return(
    <div className="">
      <Header />
      <div className="layout">
        { props.children }
      </div>    
    </div>        
  )
}
 