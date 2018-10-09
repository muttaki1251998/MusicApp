import React, { Component } from 'react';
import './App.css';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';

class App extends Component{

constructor(props){
  super(props);
  this.state = {
    query: ''
  }
}

search(){
  console.log('this.state', this.state);
}

  render(){
  return(
    <div className = "App">
      <div>
        <div className="App-title">Music Master</div>
      </div>
      <FormGroup>
        <InputGroup>
          <FormControl
            type = "text"
            placeholder = "Search for an artist"
             value = {this.state.query}
             onChange = {event => this.setState({query: event.target.value})}
             onKeyPress = {event => {
               if(event.key === 'Enter'){
                 this.search();
               }
             }}
           />
           <input type="submit" onClick = {()=>this.search()}
              value="Search" className="btn btn-light" />
        </InputGroup>
      </FormGroup>
      <div className="Profile">
        <div>Artist Picture</div>
        <div>Artist Name</div>
      <div className = "Gallery">
        Gallery
      </div>
      </div>
    </div>
    )
  }

}
export default App;
