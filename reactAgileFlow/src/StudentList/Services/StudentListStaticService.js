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

export const initialDataInAsyncStorage = () => {
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

export const getAllStudent = async () => {
    let allStudent = await _getDataFromAsyncStorage()
    return allStudent
}

export const addStudent = async (newstudent) => {
    let allStudent = await _getDataFromAsyncStorage()
    let newListstudent = [...allStudent, newstudent]
    newListstudent = await _setDataToAsyncStorage(newListstudent)
    return newListstudent
}

export const removeStudent = async (removeId) => {
    let allStudent = await _getDataFromAsyncStorage()
    let newListstudent = allStudent.filter((student) => student.studentId !== removeId)
    newListstudent = await _setDataToAsyncStorage(newListstudent)
    return newListstudent
}

export const updateStudent = async (updateStudent) => {
    let allStudent = await _getDataFromAsyncStorage()
    let newListstudent = allStudent.map((student) => student.studentId === updateStudent.studentId ? updateStudent : student)
    newListstudent = await _setDataToAsyncStorage(newListstudent)
    return newListstudent
} 