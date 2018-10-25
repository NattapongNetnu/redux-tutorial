const getRequest = async (uri) => {
    let res = await fetch(uri)
    let resJson = res.json()
    return resJson
}

const request = async (uri, method, body) => {
    try {
        let res = await fetch(uri, {
            method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        return res.ok
    } catch(error) {
        console.error(error)
    }
}

export const getAllData = async () => {
    let data = await getRequest('https://mobileparadigmtodoapi.herokuapp.com/todo')
    return data
}

export const addStudent = async (body) => {
    let status = await request('https://mobileparadigmtodoapi.herokuapp.com/todo', 'POST', body)
    let newStudent = status ? await getAllData() : false
    return newStudent
}

export const removeStudent = async (student) => {
    let removeObj = {_id: student._id }
    let status = await request('https://mobileparadigmtodoapi.herokuapp.com/todo', 'DELETE', removeObj)
    let newStudent = status ? await getAllData() : false
    return newStudent
}
