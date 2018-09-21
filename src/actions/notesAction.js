import {GET_NOTES} from '../actionTypes';
import {database} from '..firebase';



//action creators, and returns type and payload, which would be processed to the reducer 
export function getNotes(){
    return dispatch => {
        database.on('value', snapshot => {
            dispatch({
                type: GET_NOTES,
                payload: snapshot.val()
            })
        })
    }
}

export function saveNote(note) {
    return dispatch => database.push(note)
}