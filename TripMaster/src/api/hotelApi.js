

const api = import.meta.env.VITE_API_ENDPOINT + '/api/hotel/'

export const allcourses = async () => {

    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    }
    const result = await fetch(api, options)
    const data = await result.json()



    return data
}



export const getstudentcourse = async () => {
    const id = decryptID()

    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    }
    const result = await fetch("http://127.0.0.1:8000/api/studentcourses/enroll/" + id + "/", options)
    const data = await result.json()

    return data
}

export const createcourse = async (course_name, description, price,  imageCourse,country,town) => {


    let uplaoddata = new FormData()
  

    uplaoddata.append("imageCourse", imageCourse)
    uplaoddata.append("country",country )
    uplaoddata.append("town",town )
    uplaoddata.append("titre", course_name)
    uplaoddata.append("description", description)
    uplaoddata.append("price", price)



    const options = {
        method: 'POST',
        body:uplaoddata

    }
    const result = await fetch(api, options)
    const data = await result.json()

    return data
}



export const updatecourse = async (id, course_name, description, price, categories, imageCourse, userId) => {

    let uplaoddata = new FormData()
    console.log(course_name, description, price, categories, imageCourse, userId)

    uplaoddata.append("course_name", course_name)
    uplaoddata.append("description", description)
    uplaoddata.append("price", price)
    uplaoddata.append("categories", categories)
    uplaoddata.append("userId", userId)
    uplaoddata.append("duration", "12 semaine")


    if(typeof imageCourse != 'string'){
        uplaoddata.append("imageCourse", imageCourse)

    }
    const options = {
        method: 'PATCH',
        body:uplaoddata

    }
    const result = await fetch(api + id + "/", options)
    const data = await result.json()
    return data
}


export const removecourse = async (id) => {
    const options = {
        method: 'DELETE',
        header: {
            'content-type': 'application/json',
            // 'Authorization': 'Bearer ' + TokenValue
        }
    }
    const result = await fetch(api + id, options)
        .then((response) => response.json())
        .then((data) => data)
    return result
}
