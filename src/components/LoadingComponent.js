import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getUser} from '../actions/userAction';
import {getNotes} from '../actions/notesAction';


class LoadingComponent extends Component {
    componentWillMount(){
        const {userLoading, notesLoading} = this.props;
        //if we havent loaded the user, load the user
        if (userLoading === undefined) {
            this.props.getUser();
        }   
        // the same to notes
        if(notesLoading === undefined) {
            this.props.getNotes();
        }

    }
    componentWillReceiveProps(nextProps){
        //wait for user to get authenticated and try to load notes
        if (nextProps.notesLoading === -1 && nextProps.user !== null) {
            this.props.getNotes();
        }

    }
    render(){
        const {userLoading, notesLoading, user} = this.props;
        if((!userLoading && !notesLoading) || this.props.user === null) {
            return <div><span /> {}</div>
        } else {
            return <div><h2> LoADING...</h2></div>
        }

    }
    //these three methods are part of lifecylcle methods 
}

function mapStateToProps(state) {
    return {
        user: state.user,
        userLoading: state.loading.user,
        notesLoading: state.loading.notes
    };
}

export default withRouter(connect(mapStateToProps, {getUser,getNotes}),(LoadingComponent));