
const requestHttpGet = async (uri) => {
    try{
        let response = await fetch(uri)
        let responseJson = await response.json()
        return responseJson
    } catch(error) {
        console.error(error)
    }
}

const requestHttp = async (method, uri, data) => {
    try {
        let response = await fetch(uri, {
            method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        return response.ok
    } catch (error) {
        console.error(error)
    }
}


export const getAllStudent = async () => {
    let data = await requestHttpGet("https://mobileparadigmtodoapi.herokuapp.com/todo")
    return data
}

export const addStudent = async (newStd) => {
    let status = await requestHttp('POST', "https://mobileparadigmtodoapi.herokuapp.com/todo", newStd)
    let newStudentList = status ? await getAllStudent() : false
    return newStudentList
}

export const removeStudent = async (student) => {
    let status = await requestHttp('DELETE', "https://mobileparadigmtodoapi.herokuapp.com/todo", { _id: student._id })
    let newStudentList = status ? await getAllStudent() : false
    return newStudentList
}

export const updateStudent = async (updateStudentData) => {
    let status = await requestHttp('PUT', "https://mobileparadigmtodoapi.herokuapp.com/todo", updateStudentData)
    console.log(status)
}
