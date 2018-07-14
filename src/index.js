import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
   imp=()=>{
   this.setState({count:this.state.count+2})
   }
  render() {
    
    return(
      <div>
      <h1>click  </h1>
       <h1 onClick={this.imp}>{this.state.count}</h1>;
       </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
