import React, { Component } from 'react';
import {connect} from 'react-redux';
import Comments from './Comment';
import EditComponent from './EditComponent';

class ShowComment extends Component {
    render() {
        return (
            <div>
                <h1>Show All Comment</h1>
                {this.props.comments.map((comment) => (
                    <div key={comment.id}>
                        {comment.editing ? <EditComponent comment={comment} key={comment.id} /> : 
                        <Comments key={comment.id} comment={comment}/>}
                    </div>
                ))}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        comments: state,
    }
}
export default connect(mapStateToProps)(ShowComment);