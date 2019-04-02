import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Create extends Component {
    constructor(props) {
      super(props);
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeShortDesc = this.onChangeShortDesc.bind(this);
      this.onChangeDesc = this.onChangeDesc.bind(this);
      this.state = {file: '',imagePreviewUrl: ''};
      this.onChangeImg = this.onChangeImg.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        character : [],
        name: '',
        image:'',
        shortDescription : '',
        description: '',
        file: '',
        imagePreviewUrl: ''

      }
    }

  onSubmit(data) {
    data.preventDefault();

    const obj = {
        name:this.state.name,
        description:this.state.description,
        shortDescription:this.state.shortDescription,
        image: this.state.imagePreviewUrl.substr(this.state.imagePreviewUrl.indexOf(',') + 1)
    };


    axios.post("https://character-database.becode.xyz/characters/" , obj)
          .then(this.props.push('/'))


    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }

        reader.readAsDataURL(file)
      }

      onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      }
      onChangeShortDesc(e) {
        this.setState({
          shortDescription: e.target.value
        })
      }
      onChangeDesc(e) {
        this.setState({
          description: e.target.value
        })
      }

      onChangeImg(e) {
        this.setState({
          image: e.target.value
        })
      }

      render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;

        if (imagePreviewUrl) {
            $imagePreview = (<React.Fragment>
              {/* "data:image;base64," */}
                <img className="preview-img" ref="image" src={imagePreviewUrl} width="100" height="100" />
              </React.Fragment>);
          } else {
            let preview;
            if (this.state.super_hero_image){
              preview = <img className="preview-img" ref="image" src={"data:image/;base64,"+this.state.super_hero_image} width="100" height="100" />
            } else{
              preview = <img className="preview-img" src="https://img3.cliparto.com/pic/s/256180/5361912-user-icon-handcuffs-icon.jpg" width="100" height="100" />
            }
            $imagePreview = (
                preview);
          }
          return (
          <div>
            <React.Fragment>
              <Link to="/">
                Return to home
              </Link>
              <h1>
                Add a new super hero
              </h1>

              <form className="col-md-6 mx-auto" onSubmit={this.onSubmit}>

                <input className="form-control" type="text" name="name" ref="name" defaultValue={this.state.name} onChange={this.onChangeName}></input>
                <div className="preview text-center">
                  {$imagePreview}
                    <div className="browse-button">
                        <i className="fa fa-pencil-alt"></i>
                        <input className="browse-input" type="file" name="image" id="UploadedFile" onChange={(e)=>this._handleImageChange(e)} />
                    </div>
                    <span className="Error"></span>
                </div>
                <input className="form-control" type="text" ref="shortDescription" name="shortDescription" defaultValue={this.state.shortDescription} onChange={this.onChangeShortDesc}></input>
                <textarea className="form-control" ref="description" name="description" rows="10"  onChange={this.onChangeDesc}>{this.state.description}</textarea>
                <input type="submit" className="form-control btn btn-primary" value="submit"></input>
              </form>
            </React.Fragment>
          </div>
        )
      }
    }
