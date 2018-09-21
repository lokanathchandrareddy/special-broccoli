import React, { Component } from 'react';
import {database} from '../firebase';
import _ from 'lodash';
//used to connect and access the data from the redux global store, and from the react side , actions are dispatch.
//map the redux state, get global properties from there

class App extends Component {

  constructor(props){
    super(props);
    //create a local state
    this.state = { title: '', body: '', notes: {}};
    //bind 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderNotes = this.renderNotes.bind(this);

  }
  //lifecycle
  componentDidMount(){
    database.on('value', (snapshot) => {
    this.setState({
      notes: snapshot.val()});
  });
}

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  //handle submit
  handleSubmit(e){
    e.preventDefault();
    console.log('submit');
    const note = {
      title: this.state.title, 
      body: this.state.body
    }
    database.push(note);
    this.setState({
      title:'',
      body: ''
    });
  }

  //render the previous posts
  renderNotes() {
    return _.map(this.state.notes, (note,key) => {
      return ( <div key ="key">
                <h2>{note.title}</h2>
                <p>{note.body}</p>
              </div>)
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className= "col-sm-6 col-sm-offser-3">
            <form onSubmit={this.handleSubmit}>
              <div className = "form-group">
                <input onChange = {this.handleChange} type = "text" name= "title" className="form-control no-border" placeholder = "Title..." required/>

              </div>
              <div className="form-group">
                <textarea onChange = {this.handleChange} type="text" name="body" className="form-control no-border" placeholder="Body..." required />
              </div>
              <div className="form-group">
                <button className="btn btn-primary col-sm-12">Save</button>
              </div>
            </form>
          {this.renderNotes()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
