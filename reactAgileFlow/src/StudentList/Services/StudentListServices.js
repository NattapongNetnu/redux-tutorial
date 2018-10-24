
const requestHttp = async (method, uri, data = {}) => {
    try{
        let response = await fetch(uri, {
            method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        let responseJson = await response.json()
        return responseJson
    } catch {
        console.error(error);
    }
}

export const getAllStd = async () => {
    let res = await requestHttp('GET', "https://mobileparadigmtodoapi.herokuapp.com/todo")
    console.log(res)
}

export const addStd = async (newStd) => {
    let res = await requestHttp('POST', "https://mobileparadigmtodoapi.herokuapp.com/todo", newStd)
    console.log(res)
}

export const removeStd = async (id) => {
    let res = await requestHttp('DELETE', "https://mobileparadigmtodoapi.herokuapp.com/todo", id)
    console.log(res)
}

export const updateStd = async (updateStdData) => {
    let res = await requestHttp('PUT', "https://mobileparadigmtodoapi.herokuapp.com/todo", updateStdData)
    console.log(res)
}
