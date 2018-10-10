import React, { Component } from 'react';
import './App.css';
import {FormGroup, FormControl, InputGroup} from 'react-bootstrap';

class App extends Component{

constructor(props){
  super(props);
  this.state = {
    query: ''
  }
}

search(){
  console.log('this.state', this.state);
  const BASE_URL = 'https://api.spotify.com/v1/search?';
  const FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1'
                     console.log('FETCH_URL', FETCH_URL);

  var accessToken = 'BQCzh4vxLxQTf6_z9dh-SA-NsOsPtSU7SU7unc_A_Xk62a-EUWqyFKOVLI_uuGM9ZwlerPusgmEssaoMT2JPMG_GFkSa9suzQnr_Ux4eMHYpmhN7x61j7yOxNeun5Qz5lBYBvBg6FuenOfGb11y5YhJXRMuZ4BBQjrRlDGnHU32Sku7NipxO&refresh_token=AQDT__GvXCshj7t8Ob6CIvapSugqsh2o1MBQ5QxEr_A04-0wSKPrvhSHiRJXGWnKO9sRGIW_avJ5PwneILLe1S92D8Qf7_mITkrDSRJcCiOu7QNEUy75ZOthb7AMyLyTamiUTQ';
  //var myHeaders = new Headers();

  var myOptions = {
     method: 'GET',
     headers: {
         'Authorization':'Bearer ' + accessToken
     },
     mode: 'cors',
     cache: 'default'
   };

   fetch(FETCH_URL, myOptions)
     .then(response => response.json())
     .then(json => console.log(json))

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
