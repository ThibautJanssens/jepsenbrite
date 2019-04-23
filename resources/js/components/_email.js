
import React, { Component } from 'react';
import { appSendMails } from './helpers';
export default class Email extends Component {

constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
  this.addMail = this.addMail.bind(this);
  this.handleSubmit= this.handleSubmit.bind(this);
  this.state = {
    email: [{toMail:""}],
  }
}

handleChange(event) {
  if (["toMail"].includes(event.target.className) ) {
      let email = [...this.state.email];
      email[event.target.dataset.id][event.target.className] = event.target.value.toLowerCase();
      this.setState({ email }, () => console.log(this.state.email));
    }
    else {
      this.setState({ [e.target.toMail]: e.target.value.toLowerCase() });
    }
}

addMail(event) {
    this.setState((prevState) => ({
      email: [...prevState.email, {toMail:""}],
    }));
  }

handleSubmit(event){
  event.preventDefault()
    let senderId = sessionStorage.getItem("user-id-storage");
    let senderName = sessionStorage.getItem("user-name-storage");
    let mailing = [];
    let obj = this.state.email;
    //convert  array (email) to a 'single' array (mailList)
    obj.forEach(function(item) {
      Object.keys(item).forEach(function(key) {
        mailing.push(item[key]);
      });
    });
    let myJSON = { "eventId": this.props.idEvent, "eventName": this.props.nameEvent,"senderId": senderId, "senderName": senderName, "emailList": mailing}
    appSendMails(this.props.idEvent, myJSON);
}

render() {
    let {email} = this.state;

    return (

      <form className="info flex-column" onSubmit={this.handleSubmit} onChange={this.handleChange} >

        {
          email.map((val, idx)=> {
            let mailId = `mail-${idx}`
            return (
              <div key={idx}>
                <label htmlFor={mailId}>{`mail #${idx + 1}`}</label>
                <input
                  type="text"
                  name={mailId}
                  data-id={idx}
                  id={mailId}
                  onChange={this.handleChange}
                  value={email[idx].toMail}
                  className="toMail"
                />
              </div>
            )
          })
        }
        <div className="btn btn-light w-50 m-auto" onClick={this.addMail}>Add new recipient</div>
        <input className="btn btn-light w-50 m-auto" type="submit" value="Submit" />
      </form>
    )
  }//\render
}//\class
