import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Calendar } from 'primereact/calendar';
import Button from 'react-bootstrap/Button';
import { appAddEvent } from './helpers';
import { convertDate } from './helpers';

export default class Create extends Component {
  constructor(props) {
    super(props);
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;

    let minDate = new Date();
    minDate.setMonth(prevMonth);
    minDate.setFullYear(prevYear);
    let maxDate = new Date();
    maxDate.setMonth(nextMonth);
    maxDate.setFullYear(nextYear);
    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dateTemplate = this.dateTemplate.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.state = {
      name: "",
      description: "",
      street: "",
      postal_code: "",
      city: "",
      country: "",
      image_url: "",
      video_url: "",
      price: "",
      date_event: today,
      reminder: null,
      file: "",
      imagePreviewUrl: "",
      selectedOption: "image",
      thisDay: today,
      minDate: minDate,
      maxDate: maxDate,
      invalidDates: [today],
      boxReminder: false
    };
  }//\end constructor

  /* form validation*/
  validateForm() {
    return this.state.name.length > 0 && this.state.description.length > 0;
  }//\end fct validateForm

  /*onchanges*/
  handleChange(event) {
    //this.setState({ [event.target.name]: event.target.value });
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
    if (target.checked === true) {
      document.getElementsByName("calendarDisplay")[0].style.display = "block";
    } else {
      document.getElementsByName("calendarDisplay")[0].style.display = "none";
    }
  }//\end fct handleChange

  onChangeImg(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    let output = document.getElementById('output');
    //base64 convert
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
      //file preview
      output.src = reader.result
      this.setState({
        image_url : this.state.imagePreviewUrl.substr(this.state.imagePreviewUrl.indexOf(',') + 1)
      });
    }
    reader.readAsDataURL(file)
  }//\end fct onChangeImg

  handleOptionChange(changeEvent) {
  this.setState({
    selectedOption: changeEvent.target.value
  });
}

  /* date conversion + submit*/
  handleSubmit() {
    //console.log("state check: "+this.state.selectedOption);
    let image_url = "";
    let media_type = "";
    if (this.state.selectedOption === 'image' && this.state.image_url !== ""){
    console.log("image");
        //image_url = this.state.image_url;
        image_url = "data:image/jpeg;base64,"+this.state.image_url;
        media_type = this.state.selectedOption;
        console.log(image_url);
    }
    if (this.state.selectedOption === 'video' && this.state.video_url !== ""){
      console.log("video");
      //format: https://www.youtube.com/watch?v=fjlFRo3yW5g
        image_url = this.state.video_url.substr(this.state.video_url.indexOf('=') + 1);
        media_type = this.state.selectedOption;
    }
    if (this.state.selectedOption === 'image' && this.state.image_url == "" || this.state.selectedOption === 'video' && this.state.video_url == ""){
      console.log("default");
      //let image_default = "https://zupimages.net/up/19/15/xpo1.png";
      image_url = "https://zupimages.net/up/19/15/xpo1.png";
      media_type = "image";
    }
    let convertedDate = convertDate(this.state.date_event);
    let convertedReminder = "";
    let datetest = new Date();
    //check if box reminder is checked and not empty
    if (this.state.boxReminder && this.state.reminder !== null) {
      convertedReminder = convertDate(this.state.reminder);
    }
    else {
      convertedReminder = "";
    }
    //console.log("image_url: "+image_url);
    //let myJSON = { "name": "name", "date_event": "2019-04-19 15:28:28", "description": "description", "reminder": "2019-03-19 15:28:28", "video_url": "", "image_url": "https://zupimages.net/up/19/15/xpo1.png", "street": "street", "postal_code": "4000", "city": "city", "country": "country"}
    let myJSON = { "name": this.state.name, "date_event": convertedDate, "street": this.state.street, "postal_code": this.state.postal_code, "city": this.state.city, "price": this.state.price, "country": this.state.country, "description": this.state.description, "reminder": convertedReminder, "image_url": image_url, "media_type": media_type}
    console.log(myJSON);
    event.preventDefault()
    appAddEvent(myJSON);
  }//\end fct handleSubmit

  /*used by component calendar*/
  dateTemplate(date) {
    if (date.day > 10 && date.day < 15) {
      return (
        <div style={{ backgroundColor: '#1dcbb3', color: '#ffffff', fontWeight: 'bold', borderRadius: '50%', width: '2em', height: '2em', lineHeight: '2em', padding: 0 }}>{date.day}</div>
      );
    }
    else {
      return date.day;
    }
  }

  render() {
    return (
      <div className="eventsPassed">
        <div className="passedEvents">
          <div className="eventImg">
            <Form onSubmit={this.handleSubmit} className="eventsPassed">
              <h1>Create new Event</h1>
              <div className="form-group" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  required="true"
                  placeholder="your event title"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name="description"
                  placeholder="your event description"
                  as="textarea" rows="10"
                  required="true"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group" controlId="exampleForm.ControlInput1">
                <Form.Label>Adress</Form.Label>
                <Form.Control
                  name="street"
                  type="text"
                  placeholder="adress"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group" controlId="exampleForm.ControlInput1">
                <Form.Label>City</Form.Label>
                <Form.Control
                  name="city"
                  type="text"
                  required="true"
                  placeholder="city"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group" controlId="exampleForm.ControlInput1">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  name="postal_code"
                  type="number"
                  required="true"
                  placeholder="postal code"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group" controlId="exampleForm.ControlInput1">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  name="country"
                  type="text"
                  required="true"
                  placeholder="country"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group" controlId="exampleForm.ControlInput1">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  name="price"
                  type="number"
                  required="true"
                  placeholder="set the price of the event"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>
                  <input
                  type="radio"
                  name="react-tips"
                  id="radioImage"
                  ref="radioImage"
                  value="image"
                  checked={this.state.selectedOption === "image"}
                  onChange={this.handleOptionChange}
                  className="form-check-input"
                  />
                Add an image</label>
              </div>
              <div>
                <label>
                  <input
                  type="radio"
                  name="react-tips"
                  id="radioVideo"
                  ref="radioVideo"
                  value="video"
                  checked={this.state.selectedOption === "video"}
                  onChange={this.handleOptionChange}
                  className="form-check-input"
                  />
                Add a video</label>
                </div>

              {this.state.selectedOption === "image" ?
              <div className="grid-container-img-add">
                <div className="file">
                  <input
                  className="form-control-file"
                  type="file"
                  name="image"
                  id="UploadedFile"
                  onChange={(e)=>this.onChangeImg(e)} />
                </div>
                <div className="preview"><img id="output" className="output" alt=""/></div>
              </div>
              :
              <div className="grid-container-img-add">
                <div className="file">
                  <input
                  className="form-control-file"
                  name="video_url"
                  type="url"
                  placeholder="paste an url"
                  onChange={this.handleChange}
                  />
                </div>
              </div>
              }
              <div className="p-col-12 mt-3">
                <p>Date of event:</p>
                <Calendar
                dateFormat="yy/mm/dd"
                value={this.state.date_event}
                onChange={(e) => this.setState({ date_event: e.value })}
                readOnlyInput={true}
                minDate={new Date()}
                showTime={true}
                timeOnly={false}
                hourFormat="24"
                showIcon={true}
                showSeconds={true} />
              </div>
              <div className="p-col-12 mt-3">
                <div className="form-check">
                  <input className="form-check-input"
                    type="checkbox"
                    name="boxReminder"
                    checked={this.state.boxReminder}
                    onChange={this.handleChange} />
                  <label className="form-check-label">
                    Send a reminder to users who suscribed
                  </label>
                </div>
                <div style={{ display: 'none' }} name="calendarDisplay">
                  <Calendar dateFormat="yy/mm/dd" value={this.state.reminder} onChange={(e) => this.setState({ reminder: e.value })} readOnlyInput={true} showTime={true} timeOnly={false} minDate={this.state.thisDay} maxDate={this.state.date_event} hourFormat="24" showIcon={true} showSeconds={true} />
                </div>
              </div>

              <Button disabled={!this.validateForm()} className="my-3" type="submit">Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}