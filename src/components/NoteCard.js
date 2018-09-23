//this is used if we are going to use the component method 
// import React, {Component} from 'react';
// export default class NoteCard extends Component{
//     render(){
//         return(
//             <div className="jumbotron">
//                 <div>{this.props.children}</div>
//             </div>
//         );
//     }
// }

// if we are not going to use the component and class mwthod

import React from 'react';
// we can use props and props.children or like below.
const NoteCard = ({children}) => {
    return (
    <div className="jumbotron">
        <div>{children}</div>
    </div>
    );
};

export default NoteCard;
