import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from "prop-types";



export default class Character extends React.Component {
    constructor(props){
        super(props);
        this.state= {
          name:' ', shortDescription:' ', description:' ',characters:' '
        }
    }
    componentDidMount() {
      this.getCharacter()
    }
    getCharacter = () => {
      Axios
        .get("https://character-database.becode.xyz/characters/" + this.props.match.params.id )
        .then(result => this.setState({
          characters: result.data
        }))
        .catch(err => console.log(err))
    }
    render() {
        console.log(this.state)
      return (
        <div className="App">
          <NavBarContent />
        <div className="cardContent">
          <img
            className="img-thumbnail rounded-circle mx-auto mb-2 shadow-sm"
            src= {`data:image/jpeg;base64, ${this.state.characters.image}`}
            style={{ width: "100px", height: "100px" }}
          />
          <h4 className="mb-0">{this.state.characters.name}</h4>
          <span className="text-muted">{this.state.characters.shortDescription}</span>
          <span>{this.state.characters.description}</span>
          <div className="buttons">
          </div>
        </div>
        </div>
      );
    }

  }
