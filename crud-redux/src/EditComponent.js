import React, { Component } from 'react'
import { connect } from 'react-redux';

class EditComponent extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const newName = this.getName.value;
        const newMessage = this.getMessage.value;
        const data = {
            newName,
            newMessage,
        }
        this.props.dispatch({
            type: 'UPDATE_COMMENT',
            id: this.props.comment.id,
            data
        })
        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" placeholder="ป้อนชื่อ" ref={(input) => this.getName = input}/><br/><br/>
                    <textarea required rows="5" cols="28" placeholder="ข้อความที่ต้องการพิม" ref={(message) => this.getMessage = message}/> <br/> <br/>
                    <button>update</button>
                </form>
               
            </div>
        )
    }
}

export default connect()(EditComponent);