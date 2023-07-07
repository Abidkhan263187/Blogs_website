import axios from 'axios'
import { blogObj, delData, homeBlogsArray, setLoading, storeData, whoLogin } from './action';

export const fetchData = () => async (dispatch) => {
    let token = JSON.parse(localStorage.getItem("token"))
    try {
        await axios.get('https://tired-cormorant.cyclic.app/dashboard', {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        }).then(({ data }) => {
            dispatch(storeData(data.blogList))
        })
    } catch (error) {
        console.log(error);
    }
};

export const homeBlogs = (pageNo) => async (dispatch) => {
    let token = JSON.parse(localStorage.getItem("token"))
    let url = 'https://tired-cormorant.cyclic.app/blog'

    if (pageNo) {
        url += `?page=${pageNo}`
    }
    try {
        await axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        }).then(({ data }) => {
            dispatch(homeBlogsArray(data.blogList))
            console.log(data.blogList)
        })
    } catch (error) {

    }
}


export const signUpUser = async (user) => {
    try {
        await axios.post(`https://tired-cormorant.cyclic.app/user/signup`, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        alert("signup Successfully")
    }
    catch (error) {
        console.log("error while signup", error)
    }
}

export const postBlog = (blog) => async (dispatch) => {
    let token = JSON.parse(localStorage.getItem("token"))
    try {
        await axios.post(`https://tired-cormorant.cyclic.app/create`, blog, {
            headers: {
                "Authorization": "Bearer " + token,
                'Content-Type': 'application/json'
            }
        })
        // fetchData();
    } catch (error) {
        console.log(error)
    }
}
export const loginUser = (loginDetails) => async (dispatch) => {

    try {
        await axios.post(`https://tired-cormorant.cyclic.app/user/login`, loginDetails, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(({ data }) => {

            localStorage.setItem('token', JSON.stringify(data.token));
            localStorage.setItem('who', JSON.stringify(loginDetails.email));
            dispatch(whoLogin(loginDetails.email))
            // dispatch(fetchData());
            // dispatch(setLoading(true));
        })

    } catch (error) {
        alert("login failed")
        console.log("error while login", error)
    }
}

export const logOut = () => async (dispatch) => {
    try {
        axios.post(`https://tired-cormorant.cyclic.app/user/logout`, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(({ data }) => {

            localStorage.setItem('token', JSON.stringify(data.token));
            dispatch(whoLogin(""))
            // dispatch(fetchData());
        })
    } catch (error) {

    }
}

export const handleDeleteEmployee = (id) => async (dispatch) => {
    let token = JSON.parse(localStorage.getItem("token"))

    try {
        await axios.delete(`https://tired-cormorant.cyclic.app/delete/${id}`, {
            headers: {
                "Authorization": "Bearer " + token,
                'Content-Type': 'application/json'
            }
        }).then(({ data }) => {
            console.log(data);
        })
        // dispatch(fetchData());
        console.log("deleted")
    } catch (error) {
        console.log('Error deleting employee:', error);
    }
};

export const updateBlogObj = (id, obj, token) => async (dispatch) => {

    try {
        await axios.patch(`https://tired-cormorant.cyclic.app/edit/${id}`, obj, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        });
        alert('Updated successfully');
        dispatch(fetchData());
    } catch (error) {
        alert('Error occurred');
        console.log('Error:', error);
    }
};

export const singleBlogObj = (id) => async (dispatch) => {
    console.log(id)
    try {
        axios.get(`https://tired-cormorant.cyclic.app/blog/single/${id}`).then(({ data }) => {
            console.log(data)
            dispatch(blogObj(data.single))
        })
    } catch (error) {
        console.log(error)

    }
}

