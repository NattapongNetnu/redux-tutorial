import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './styles'
import StudentItem from './StudentItem'
// import StudentService from './StudentListService'
import * as newService from './StudentListStaticService'

export default class StudentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stdList: []
        }
    }
    componentDidMount() {
        newService.initialDataInAsyncStorage()
        this.getAllStd()
    }

    checkSaveDataStatus(result) {
        if (result) {
            this.setState({stdList: result})
        } else {
            console.log("failed to add std")
        }
    }

    getAllStd = async () => {
        let allStd = await newService.getAllStd()
        this.setState({ stdList: allStd})
    }

    addStudent = async () => {
        let newList = await newService.addStd({name: "Bill Gate", stdId: "56160001"})
        this.checkSaveDataStatus(newList)
    }
    deleteStudent = async () => {
        let newList = await newService.removeStd("56160112")
        this.checkSaveDataStatus(newList)
    }
    updateStudent = async () => {
        let newList = await newService.updateStd({name: "Steve Job", stdId: "56160001"})
        this.checkSaveDataStatus(newList)
    }
    renderStdItem() {
        return (
            this.state.stdList.map((std, index) => {
                return (
                    <StudentItem std={std} key={index}/>
                )
            })
        )
    }
    render() {
        console.log(this.state)
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Hello Student</Text>
                {this.renderStdItem()}
                <TouchableOpacity onPress={() => this.addStudent()}>
                    <Text>add std</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.deleteStudent()}>
                    <Text>delete std</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.updateStudent()}>
                    <Text>update std</Text>
                </TouchableOpacity>
            </View>
        )
    }
}