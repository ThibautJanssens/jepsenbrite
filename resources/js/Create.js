import React, { Component } from 'react';

import './App.scss';
import { Link } from "react-router-dom";
import Axios from 'axios';

class Create extends Component {
constructor(props) {
super(props);

this.state = {
  isLoading: true,
  characters: []
}
}

componentDidMount() {
this.getCharacter()
}

getCharacter = () => {
Axios
.get('https://character-database.becode.xyz/characters')
.then(result => this.setState({
characters: result.data
}))
.catch(err => console.log(err))
}

render() {

return (
  <div className="App">
    <div><Link to={`/Create/${this.state.characters.id}`}><button>Add</button></Link></div>
    <div className="wholeHeroes">
    <Create sendData={this.state.characters} />;
    </div>
  </div>
);
}

}

export default Create;