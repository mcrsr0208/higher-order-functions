import React from 'react';
import UpdatedComponent from './withWrapper';

class ClickCounter extends React.Component{

  render(){
    const {count,increment} = this.props;
    return(
      <div>
        <button onClick={increment}>clicked { count } times</button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter);