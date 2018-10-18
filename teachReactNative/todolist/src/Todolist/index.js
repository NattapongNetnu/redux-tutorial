import React from 'react'
import { View } from 'react-native'
import Header from '../common/Header'
import TodoItems from './TodoItems'
import Input from '../common/Input'

export default class Todolist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: "",
            todo: [
                { id: 0, text: "Doing Homework"},
                { id: 1, text: "Coding Program"},
                { id: 2, text: "Make React Native"},
                { id: 3, text: "Make React Native"},
            ]
        }
        this.onChangeText = this.onChangeText.bind(this)
        this.addTask = this.addTask.bind(this)
    }

    onChangeText(value) {
        console.log(value)
        this.setState({
            input: value
        })
    }

    addTask() {
        console.log(this.state.todo)
        newTodo = {
           id: this.state.todo.length,
           text: this.state.input
        }
        this.setState({
            todo: [...this.state.todo, newTodo],
            input: ""
        })
    }

    renderTodoItems() {
        return (
            this.state.todo.map((todo) => {
                return (
                    <TodoItems textTask={todo.text} key={todo.id}/>
                )
            })
        )
    }

    render() {
        return (
            <View>
                <Header textHeader="Todolist"/>
                <Input
                    placeholder="Enter Task"
                    onChange={this.onChangeText}
                    onPress={this.addTask}
                    value={this.state.input}
                />
                {this.renderTodoItems()}
            </View>
        )
    }
}