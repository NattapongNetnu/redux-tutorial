import React from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import styles from './styles'
import StudentItem from './StudentItem'
// import StudentService from './StudentListService'
// import * as newService from './Services/StudentListStaticService'
import * as StudentService from './Services/StudentListServices'

export default class StudentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            studentList: [],
            nameInput: '',
            studentIdInput: '',
            editName: '',
            editStudentId: ''
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
        let newStudentList = await StudentService.addStudent({name: nameInput, studentId: studentIdInput, editStatus: false})
        this.setState({ studentList: newStudentList, nameInput: '', studentIdInput: '' })

    }

    deleteStudent = async (student) => {
        let newStudentList = await StudentService.removeStudent(student)
        this.setState({ studentList: newStudentList})
    }

    updateStudent = async ({ name, studentId, _id, editStatus }) => {
        let updateStudentObj = {}
        if (editStatus) {
            let { editName, editStudentId } = this.state
            updateStudentObj = {
                name: editName,
                studentId: editStudentId,
                editStatus: false,
                _id
            }
            let newStudentList = await StudentService.updateStudent(updateStudentObj)
            this.setState({ studentList: newStudentList })
        } else {
            updateStudentObj = {
                name,
                studentId,
                _id,
                editStatus: !editStatus
            }
        }
        let newStudentList = await StudentService.updateStudent(updateStudentObj)
        this.setState({ studentList: newStudentList, editName: '', editStudentId: '' })
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
                        editName={(editName) => this.setState({ editName })}
                        editStudentId={(editStudentId) => this.setState({ editStudentId })}
                    />
                )
            })
        )
    }

    render() {
        console.log(this.state)
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>Hello Student</Text>
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