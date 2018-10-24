import { AsyncStorage } from 'react-native'

const _getDataFromAsyncStorage = async () => {
    try {
        let newList = await AsyncStorage.getItem('std')
        newList = JSON.parse(newList)
        return newList
    } catch (error) {
        console.log(error)
    }
}

const _setDataToAsyncStorage = async (stdObj) => {
    try {
        await AsyncStorage.setItem('std', JSON.stringify(stdObj));
        return stdObj
      } catch (error) {
        console.log(error)
        return false
      }
}

export const initialDataInAsyncStorage = () => {
    let stdObj = [
        {
            "name": "Nattapong Netnu",
            "stdId": "56160112"
        },
        {
            "name": "Katika Kongsil",
            "stdId": "56160232"
        }
    ]
    _setDataToAsyncStorage(stdObj)
}

export const getAllStudent = async () => {
    let allStd = await _getDataFromAsyncStorage()
    return allStd
}

export const addStudent = async (newStd) => {
    let allStd = await _getDataFromAsyncStorage()
    let newListStd = [...allStd, newStd]
    newListStd = await _setDataToAsyncStorage(newListStd)
    return newListStd
}

export const removeStudent = async (removeId) => {
    let allStd = await _getDataFromAsyncStorage()
    let newListStd = allStd.filter((std) => std.stdId !== removeId)
    newListStd = await _setDataToAsyncStorage(newListStd)
    return newListStd
}

export const updateStudent = async (updateStudent) => {
    let allStd = await _getDataFromAsyncStorage()
    let newListStd = allStd.map((std) => std.stdId === updateStudent.stdId ? updateStudent : std)
    newListStd = await _setDataToAsyncStorage(newListStd)
    return newListStd
} 