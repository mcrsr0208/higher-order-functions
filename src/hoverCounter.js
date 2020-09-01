import React from 'react';
import UpdatedComponent from './withWrapper';

class HoverCounter extends React.Component{

  

  render(){
    const {count,increment} = this.props
    return(
      <div>
        <h1 onMouseOver={increment}>clicked { count } times</h1>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter);