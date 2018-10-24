import { AsyncStorage } from 'react-native'

const _getDataFromAsyncStorage = async () => {
    try {
        let newList = await AsyncStorage.getItem('student')
        newList = JSON.parse(newList)
        return newList
    } catch (error) {
        console.log(error)
    }
}

const _setDataToAsyncStorage = async (studentObj) => {
    try {
        await AsyncStorage.setItem('student', JSON.stringify(studentObj));
        return studentObj
      } catch (error) {
        console.log(error)
        return false
      }
}

export default class StudentService {
    constructor() {
        let studentObj = [
            {
                "name": "Nattapong Netnu",
                "studentId": "56160112"
            },
            {
                "name": "Katika Kongsil",
                "studentId": "56160232"
            }
        ]
        _setDataToAsyncStorage(studentObj)
    }
    getAllStudent = async () => {
        let student = await _getDataFromAsyncStorage()
        return student
    }

    addStudent = async (newStudent) => {
        let allStudent = await _getDataFromAsyncStorage()
        let newStudentList = [...allStudent, newStudent]
        newStudentList = await _setDataToAsyncStorage(newStudentList)
        return newStudentList
    }

    updateStudent = async (updateStudent) => {
        let allStudent = await _getDataFromAsyncStorage()
        let newStudentList = allStudent.map((student) => student.studentId === updateStudent.studentId ? updateStudent : student)
        newStudentList= await _setDataToAsyncStorage(newStudentList)
        return newStudentList
    }

    removeStudent = async (studentId) => {
        let allStudent = await _getDataFromAsyncStorage()
        let newStudentList = allStudent.filter((student) => student.studentId !== studentId)
        newStudentList = await _setDataToAsyncStorage(newStudentList)
        return newStudentList
    }
}