import axios from 'axios'
import { storeData } from './action';
export const getdata = () => async (dispatch) => {
    try {
        axios.get(`http://localhost:5000/`).then(({ data }) => {
            dispatch(storeData(data))
        })
    } catch (error) {
        console.log(error);
    }
}

export const postBlog = (blog) => async (dispatch) => {
    try {
        await axios.post(`http://localhost:5000/blog/create`, blog, {
            headers: {
                'Content-Type': 'application/json'

            }
        })
        dispatch(getdata());
    } catch (error) {
        console.log(error)
    }
}

export const signUpUser = async (user) => {
    try {
        await axios.post(`http://localhost:5000/user/signup`, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        alert("signup Successfully")
    }
     catch (error) {
     console.log("error while signup",error)
    }
}