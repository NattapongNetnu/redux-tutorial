import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <h1>{this.props.username}</h1>
        )
    }
}

export default User