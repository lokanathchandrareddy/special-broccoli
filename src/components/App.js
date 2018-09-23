import React, { Component } from 'react';
// import {database} from '../firebase'; removed after adding redux store
import _ from 'lodash';
//used to connect and access the data from the redux global store, and from the react side , actions are dispatch.
//map the redux state, get global properties from there
import { connect } from 'react-redux';
import { getNotes, saveNotes, deleteNotes } from '../actions/notesAction';
import NoteCard from './NoteCard';
import {getUser} from '../actions/userAction';



class App extends Component {

  constructor(props) {
    super(props);
    //create a local state
    this.state = {
      title: '',
      body: ''
      // , notes: {} removed after using redux store, since it is directly coming from the state 
    };
    //bind 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderNotes = this.renderNotes.bind(this);

  }
  //lifecycle
  // componentDidMount() {
  //   this.props.getNotes();
  //   this.props.getUser();
  // }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  //handle submit
  handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
    const note = {
      title: this.state.title,
      body: this.state.body
    }
    // database.push(note);
    //after redux its changed to
    //here we have to pass the note
    this.props.saveNotes(note);
    this.setState({
      title: '',
      body: ''
    });
  }

  //render the previous posts
  renderNotes() {
    return _.map(this.props.notes, (note, key) => {
      return (
        <NoteCard key={key}>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
          <button className="btn btn-danger btn-xs" onClick={() => this.props.deleteNotes(key)}>X</button>

        </NoteCard>
      );
    });
  }
  //this function in the arrow function points to the enclosing context , arrow function doesnt have its own this object

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offser-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input onChange={this.handleChange} type="text" name="title" className="form-control no-border" placeholder="Title..." required />

              </div>
              <div className="form-group">
                <textarea onChange={this.handleChange} type="text" name="body" className="form-control no-border" placeholder="Body..." required />
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
function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes,
    user: state.user
  };
}


export default connect(mapStateToProps, { getNotes, saveNotes, deleteNotes, getUser })(App);
