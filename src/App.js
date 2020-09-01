import React from "react";
import "./style.css";
import ClickCounter from './clickCounter';
import HoverCounter from './hoverCounter';

class App extends React.Component{

  render(){
    return(
      <div>
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}

export default App;