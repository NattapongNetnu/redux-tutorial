import React from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import styles from './styles'
import StudentItem from './StudentItem'
// import StudentService from './StudentListService'
import * as newService from './Services/StudentListStaticService'
import * as StudentService from './Services/StudentListServices'

export default class StudentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            studentList: [],
            nameInput: '',
            studentIdInput: '',
        }
    }
    componentDidMount() {
        this.getAllStudentFromAPI()
    }

    getAllStudent = async () => {
        let allStd = await newService.getAllStudent()
        this.setState({ stdList: allStd})
    }

    getAllStudentFromAPI = async () => {
        let studentList = await StudentService.getAllStudent()
        this.setState({ studentList })
    }

    addStudent = async () => {
        let { nameInput, studentIdInput } = this.state
        let newStudentList = await StudentService.addStudent({name: nameInput, studentId: studentIdInput})
        this.setState({ studentList: newStudentList, nameInput: '', studentIdInput: '' })

    }

    deleteStudent = async (student) => {
        let newStudentList = await StudentService.removeStudent(student)
        this.setState({ studentList: newStudentList})
    }

    updateStudent = async (student) => {
        console.log(student)
        this.setState({ studentList: this.state.studentList.map((std) => std._id === student._id ? {...std, editStatus: !std.editStatus} : std) })
        console.log(this.state.studentList)
        // let newStudentList = await StudentService.updateStudent({name: "Steve Job", _id: student._id})
        // this.setState({ studentList: newStudentList })
    }

    renderStdItem() {
        return (
            this.state.studentList.map((student, index) => {
                return (
                    <StudentItem 
                        student={student}
                        key={index}
                        onPress={(student) => this.updateStudent(student)}
                        handleRemove={(student) => this.deleteStudent(student)}
                    />
                )
            })
        )
    }

    render() {
        console.log(this.state)
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Hello Student</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Enter Name and Lastname"
                    onChangeText={(nameInput) => this.setState({ nameInput })}
                    value={this.state.nameInput}
                />
                <TextInput 
                    style={styles.textInput}
                    placeholder="Enter Student ID"
                    onChangeText={(studentIdInput) => this.setState({ studentIdInput })}
                    value={this.state.studentIdInput}
                />
                
                <TouchableOpacity onPress={() => this.addStudent()}>
                    <Text>add student</Text>
                </TouchableOpacity>

                {this.renderStdItem()}
            </View>
        )
    }
}