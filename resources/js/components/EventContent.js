import React, { Component } from 'react';
import Axios from 'axios';


export default class EventContent extends Component {
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
    Axios.get('https://contattafiles.s3.us-west-1.amazonaws.com/tnt14094/YONKorhw80oDx91/V2JepsenBrite.postman_collection.json')
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
      return(
          <div className="eventsPassed">
                <div className='passedEvents'>
                    <div className='eventImg'>
                        <h1 className='eventTitle'>Hello Title</h1>
                        <img src='https://besthqwallpapers.com/Uploads/31-12-2017/35784/thumb2-modern-technology-4k-chip-cpu-neon-light.jpg' className='imgEvent' />
                    </div>
                    <div className='passedEvents2'>
                        <p> {this.state.characters[0].name}</p>

                    </div>
                    <div className='wholeInfos'>
                    <div className='info'>
                        <img className='infoIcons' src='https://static.thenounproject.com/png/1565357-200.png' /><p className='infoTxt'>BecodeCentral</p>
                    </div>
                    <div className='info'>
                        <img className='infoIcons' src='https://image.flaticon.com/icons/png/512/63/63355.png' /><p className='infoTxt'>15:30</p>
                    </div>
                    </div>
                </div>
          </div>
          );
          return (<p>loading...</p>);

      }
}
