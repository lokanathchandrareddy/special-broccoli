import {GET_NOTES, NOTES_STATUS} from '../actionTypes';
import {database} from '../firebase';


//we have to use middleware to enable simple javascript, while dispatchin ,
//here we use redux-thunk as a middleware

//action creators, and returns type and payload, which would be processed to the reducer 
export function getNotes(){
    return dispatch => {
        //as soon as the function fires show loading true
        dispatch({
            type: NOTES_STATUS,
            payload: true 
        });
        database.on('value', snapshot => {
            dispatch({
                type: GET_NOTES,
                payload: snapshot.val()
            });
        //once notes are received show loading to false  
            dispatch({
                type: NOTES_STATUS,
                payload: false
            });
            //
          }, () => {
              dispatch({
                type: NOTES_STATUS,
                payload: -1
              });
        });
    };
}

export function saveNotes(note) {
    return dispatch => database.push(note);
}

export function deleteNotes(id) {
    return dispatch => database.child(id).remove();
}