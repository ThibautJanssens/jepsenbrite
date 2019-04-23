import React, { Component } from 'react';
import { updateEvent } from './helpers';
import { appGetEventByIDEdit } from './helpers';
import { convertDate } from './helpers';
import Form from 'react-bootstrap/Form';
import { Calendar } from 'primereact/calendar';
import Button from 'react-bootstrap/Button';

export default class Edit extends Component {

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
    this.input = React.createRef();
    this.state = {
      eventList: [],
      suscribersList: [],
      boxSubscribe: false,
      idEvent: this.props.match.params.id,
      name: "",
      description: "",
      street: "",
      postal_code: "",
      city: "",
      country: "",
      image_url: "",
      video_url: "",
      media_type: "",
      selectedOption: "",
      file: "",
      imagePreviewUrl: "",
      price: "",
      date_event: "",
      reminder: "",
      thisDay: today,
      minDate: minDate,
      maxDate: maxDate,
      invalidDates: [today],
      boxReminder: false
    }

  }//\constructor


  componentDidMount() {
    appGetEventByIDEdit(this.props.match.params.id, this);
  }

  /* form validation*/
  validateForm() {
    return this.state.name.length > 0 && this.state.description.length > 0;
  }//\end fct validateForm

  /*onchanges*/
  handleChange(event) {
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
        image_url: this.state.imagePreviewUrl.substr(this.state.imagePreviewUrl.indexOf(',') + 1)
      });
    }
    reader.readAsDataURL(file)
  }//\end fct onChangeImg

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
    if (this.state.selectedOption === 'image') {
      this.setState({
        image_url: "",
        video_url: "",
      });
    }
    if (this.state.selectedOption === 'video') {
      this.setState({
        video_url: "",
      });
    }
  }

  /* date conversion + submit*/
  handleSubmit() {
    //check if "data:image/jpeg;base64," is there twice (because it's added to the default preview)
    //this.state.imagePreviewUrl.substr(this.state.imagePreviewUrl.indexOf(',') + 1)
    let temp = this.state.image_url;
    let count = (temp.match(/base64/g) || []).length;
    if (count !== 0) {
      this.setState({
        image_url: this.state.image_url.substr(this.state.image_url.indexOf(',') + 1)
      });
    }
    //console.log("url:"+this.state.image_url);
    //media type & media url
    let image_url = "";
    let media_type = "";
    if (this.state.selectedOption === 'image' && this.state.image_url !== "" && count === 0) {
      image_url = "data:image/jpeg;base64," + this.state.image_url;
      media_type = this.state.selectedOption;
    }
    if (this.state.selectedOption === 'image' && this.state.image_url !== "" && count !== 0) {
      image_url = this.state.image_url;
      media_type = this.state.selectedOption;
    }
    if (this.state.selectedOption === 'video' && this.state.video_url !== "") {
      //format: https://www.youtube.com/watch?v=fjlFRo3yW5g
      image_url = this.state.video_url.substr(this.state.video_url.indexOf('=') + 1);
      media_type = this.state.selectedOption;
    }
    if (this.state.selectedOption === 'image' && this.state.image_url == "" || this.state.selectedOption === 'video' && this.state.video_url == "") {
      //let image_default = "https://zupimages.net/up/19/15/xpo1.png";
      image_url = "https://zupimages.net/up/19/15/xpo1.png";
      media_type = "image";
    }


    //convert date
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
    let myJSON = { "name": this.state.name, "date_event": convertedDate, "street": this.state.street, "postal_code": this.state.postal_code, "city": this.state.city, "price": this.state.price, "country": this.state.country, "description": this.state.description, "reminder": convertedReminder, "image_url": image_url, "media_type": media_type }
    //console.log(myJSON);
    event.preventDefault()
    //updateEvent(this.state.idEvent,myJSON);
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
    const { eventList } = this.state;
    const authorArticle = this.state.eventList.map(item => item.author);

    return (
      <div className="eventsPassed">
        <div className='passedEvents'>
          <div className='passedEvents2'>
            <Form onSubmit={this.handleSubmit} className="m-5">
              <h1>Update event</h1>
              <div className="m-2 m-sm-5 p-2 p-xl-5">
                <div>
                  {this.state.eventList.map(item =>
                    <div key={item.id} className="w-100  ">
                      <div controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                          name="name"
                          type="text"
                          value={this.state.name}
                          placeholder="your event title"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          name="description"
                          placeholder="your event description"
                          as="textarea" rows="10"
                          value={this.state.description}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div controlId="exampleForm.ControlInput1">
                        <Form.Label>Adress</Form.Label>
                        <Form.Control
                          name="street"
                          type="text"
                          value={this.state.street}
                          placeholder="street"
                          onChange={this.handleChange}
                        />
                        <Form.Control
                          name="postal_code"
                          type="number"
                          value={this.state.postal_code}
                          placeholder="postal code"
                          onChange={this.handleChange}
                        />
                        <Form.Control
                          name="city"
                          type="text"
                          value={this.state.city}
                          placeholder="city"
                          onChange={this.handleChange}
                        />
                        <Form.Control
                          name="country"
                          type="text"
                          value={this.state.country}
                          placeholder="country"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div controlId="exampleForm.ControlInput1">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                          name="price"
                          type="number"
                          value={this.state.price}
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
                        <div className="grid-container-img-add form-group">
                          <div className="file">
                            <input
                              className="form-control-file btn btn-primary"
                              type="file"
                              name="image"
                              id="UploadedFile"
                              onChange={(e) => this.onChangeImg(e)} />
                          </div>
                          <div className="preview"><img id="output" src={this.state.imagePreviewUrl} className="output" alt="" /></div>
                        </div>
                        :
                        <div className="grid-container-img-add">
                          <div className="file">
                            <input
                              className="form-control-file form-group"
                              name="video_url"
                              id="video_url"
                              type="url"
                              placeholder="paste an url"
                              value={this.state.video_url}
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
                          showSeconds={true}
                        />
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
                          <Calendar
                            dateFormat="yy/mm/dd"
                            value={this.state.reminder}
                            onChange={(e) => this.setState({ reminder: e.value })}
                            readOnlyInput={true}
                            showTime={true}
                            timeOnly={false}
                            hourFormat="24"
                            showIcon={true}
                            showSeconds={true}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <Button disabled={!this.validateForm()} className="my-3" type="submit">Submit</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>

    )
  }
}
