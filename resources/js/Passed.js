import React, { Component } from 'react';

import { Link } from "react-router-dom";
import Axios from 'axios';

class Passed extends Component {
constructor(props) {
  super(props);
  this.getCharacter= this.getCharacter.bind(this);

  this.state = {
    isLoading: true,
    characters: []
  }
}

componentDidMount() {
  this.getCharacter()
}

getCharacter(e){
  Axios.get('/api/')
    .then(response => {
      console.log(response)

      this.setState({
      characters: response.data,
      isLoading: false
    })
  })
    .catch(err => console.log(err));
    console.log();
  }

render() {
 const {isLoading, characters}=this.state;
 if(!isLoading)
return (
  <div className="App">
    {/* <div><Link to={`/Create/${this.state.characters.id}`}><button>Add</button></Link></div> */}
   <p> {this.state.characters[0].name} </p>
  </div>
);
return (<p>loading...</p>);
}

}

export default Passed;
