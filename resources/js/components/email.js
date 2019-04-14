import React, { Component } from 'react';

export default class Email extends Component {

constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
  this.addMail = this.addMail.bind(this);
  this.handleSubmit= this.handleSubmit.bind(this);
  this.state = {
    email: [{name:""}],
    from: "",
    eventName: "",
  }
}

handleChange(event) {
  if (["name"].includes(event.target.className) ) {
      let email = [...this.state.email];
      email[event.target.dataset.id][event.target.className] = event.target.value.toUpperCase();
      this.setState({ email }, () => console.log(this.state.email));
    }
    else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
}

addMail(event) {
    this.setState((prevState) => ({
      email: [...prevState.email, {name:""}],
    }));
  }

handleSubmit(event){
  event.preventDefault()
}

componentDidMount() {
  console.log("email form");
}

render() {

    let {from, eventName, email} = this.state;

    return (

      <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
        <h1>Share with you friends</h1>
        <label htmlFor="name">From</label>
        <input type="text" name="from" id="from" value={from} />
        <label htmlFor="eventName">Event Name</label>
        <input type="text" name="eventName" id="eventName" value={eventName} />
        <button onClick={this.addMail}>Add new recipient</button>
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
                  value={email[idx].name}
                  className="name"
                />
              </div>
            )
          })
        }
        <input type="submit" value="Submit" />
      </form>
    )
  }//\render
}//\class
