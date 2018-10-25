import React from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import Header from '../common/Header'
import TodoItems from './TodoItems'
// import Input from '../common/Input'
import * as TodoListServices from './TodoListServices'

export default class Todolist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            student: [],
            nameInput: '',
            studentIdInput: '',
        }
        this.onChangeText = this.onChangeText.bind(this)
        this.addTask = this.addTask.bind(this)
    }

    componentDidMount() {
        this.getAllData()
    }

    onChangeText(value) {
        console.log(value)
        this.setState({
            input: value
        })
    }

    getAllData = async () => {
        let student = await TodoListServices.getAllData()
        this.setState({ student })
    }

    addTask = async () => {
        let newStudent = {
            name: this.state.nameInput,
            studentId: this.state.studentIdInput,
            editStatus: false,
        }
        let newStudentList = await TodoListServices.addStudent(newStudent)
        this.setState({ student: newStudentList })
    }
    
    removeStudent = async (student) => {
        let newStudentList = await TodoListServices.removeStudent(student)
        this.setState({ student: newStudentList })
    }

    renderTodoItems() {
        return (
            this.state.student.map((student, index) => {
                return (
                    <TodoItems 
                        student={student}
                        key={index}
                        removeStudent={(student) => this.removeStudent(student)}
                    />
                )
            })
        )
    }

    render() {
        return (
            <View>
                <Header textHeader="Todolist"/>
                <TextInput 
                    placeholder="Enter Name and Lastname"
                    onChangeText={(nameInput) => this.setState({ nameInput })}
                />
                <TextInput
                    placeholder="Enter Student Id"
                    onChangeText={(studentIdInput) => this.setState({ studentIdInput })}
                />
                <TouchableOpacity onPress={this.addTask}>
                    <Text>add Student</Text>
                </TouchableOpacity>
                {/* <Input
                    placeholder="Enter Name and Lastname"
                    onChange={this.onChangeText}
                    onPress={this.addTask}
                    value={this.state.input}
                />
                <Input
                    placeholder="Enter Student Id"
                    // onChange={this.onChangeText}
                    // onPress={this.addTask}
                    // value={this.state.input}
                /> */}

                {this.renderTodoItems()}
            </View>
        )
    }
}