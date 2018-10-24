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

export default class StudentService {
    constructor() {
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
    getAllStd = async () => {
        let data = await _getDataFromAsyncStorage()
        return data
    }

    addStd = async (newStd) => {
        let allStd = await _getDataFromAsyncStorage()
        let newStdList = [...allStd, newStd]
        newStdList = await _setDataToAsyncStorage(newStdList)
        return newStdList
    }

    updateStd = async (updateStd) => {
        let allStd = await _getDataFromAsyncStorage()
        let newStdList = allStd.map((std) => std.stdId === updateStd.stdId ? updateStd : std)
        newStdList= await _setDataToAsyncStorage(newStdList)
        return newStdList
    }

    removeStd = async (stdId) => {
        let allStd = await _getDataFromAsyncStorage()
        let newStdList = allStd.filter((std) => std.stdId !== stdId)
        newStdList = await _setDataToAsyncStorage(newStdList)
        return newStdList
    }
}