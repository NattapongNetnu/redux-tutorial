import React from 'react'
import { connect } from 'react-redux';

const Comments = (props) => {
    return (
        <div>
            <h2>{props.comment.name}</h2>
            <p>{props.comment.message}</p>
            <button
                onClick={() => props.dispatch({type:'EDIT_COMMENT', id: props.comment.id})}
            >Edit</button>
            <button
                onClick={() => props.dispatch({type:'DELETE_COMMENT', id: props.comment.id})}
            >Delete</button>
        </div>
    );
}

export default connect()(Comments);