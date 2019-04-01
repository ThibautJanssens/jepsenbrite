import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Link } from "react-router-dom";
import { Card } from "shards-react";

class CardContent extends React.Component {

  render() {

    const { isLoading } = this.props;
    const userDetails = this.props.sendData.map(index =>
      <div className="cardContent">
        <img
          className="img-thumbnail rounded-circle mx-auto mb-2 shadow-sm"
          src= {`data:image/jpeg;base64, ${index.image}`}
          alt={index.name}
          style={{ width: "100px", height: "100px" }}
        />
        <Link to={`/Character/${index.id}`} >  <h4 className="mb-0" id="linkCharacter">{index.name}</h4></Link>
        <span className="text-muted">{index.shortDescription}</span>
        <div className="buttons">
        <Link to={`/Edit/${index.id}`} ><button className="modalBtn" >Edit</button></Link>
        <button className="modalBtn">Delete</button>
        </div>
      </div>
    );

    const loadingMessage = <span className="d-flex m-auto">Loading...</span>;

    return (
      <Card
        className="wholeHeroes"
        style={{ maxWidth: "1200px", minHeight: "250px" }}
      >
        {isLoading ? loadingMessage :  userDetails}
      </Card>
    );
  }
}

CardContent.propTypes = {
  name: PropTypes.string,
  shortDescription: PropTypes.string,
  isLoading: PropTypes.bool
};

export default CardContent;
