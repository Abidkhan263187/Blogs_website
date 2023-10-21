import axios from 'axios'
import { blogObj, delData, homeBlogsArray, login, login_load, storeData, whoLogin } from './action';


export const fetchData = () => async (dispatch) => {
    let token = JSON.parse(localStorage.getItem("token"))
    try {
        await axios.get(`${process.env.REACT_APP_URL}/dashboard`, {
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
    let url = `${process.env.REACT_APP_URL}/blog`

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
           
        })
    } catch (error) {

    }
}


export const signUpUser = async (user) => {
    try {
        await axios.post(`${process.env.REACT_APP_URL}/user/signup`, user, {
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
        await axios.post(`${process.env.REACT_APP_URL}/blog/create`, blog, {
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
    dispatch(login_load(true))
    try {
        await axios.post(`${process.env.REACT_APP_URL}/user/login`, loginDetails, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(({ data }) => {

            localStorage.setItem('token', JSON.stringify(data.token));
            sessionStorage.setItem('who', JSON.stringify(loginDetails.email));
            dispatch(whoLogin(loginDetails.email))
            dispatch(login(true))
            dispatch(login_load(false))
           

            // dispatch(fetchData());
            // dispatch(setLoading(true));
        })

    } catch (error) {
        dispatch(login(false))
        alert("login failed")
        dispatch(login_load(false))
       

        console.log("error while login", error)
    }
}

export const logOut = () => async (dispatch) => {
    try {
        axios.post(`${process.env.REACT_APP_URL}/user/logout`, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(({ data }) => {

            localStorage.setItem('token', JSON.stringify(data.token));
            sessionStorage.setItem('who', JSON.stringify(""));
            dispatch(whoLogin(""))
            dispatch(login(false))
            // dispatch(fetchData());
        })
    } catch (error) {

    }
}

export const handleDeleteEmployee = (id) => async (dispatch) => {
    let token = JSON.parse(localStorage.getItem("token"))

    try {
        await axios.delete(`${process.env.REACT_APP_URL}/blog/delete/${id}`, {
            headers: {
                "Authorization": "Bearer " + token,
                'Content-Type': 'application/json'
            }
        }).then(({ data }) => {
           
        })
        // dispatch(fetchData());
        // console.log("deleted")
    } catch (error) {
        console.log('Error deleting employee:', error);
    }
};

export const updateBlogObj = (id, obj, token) => async (dispatch) => {

    try {
        await axios.patch(`${process.env.REACT_APP_URL}/blog/edit/${id}`, obj, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        });

        // dispatch(fetchData());
        // alert('Updated successfully');
    } catch (error) {
        alert('Error occurred');
        console.log('Error:', error);
    }
};

export const singleBlogObj = (id) => async (dispatch) => {
    // console.log(id)
    try {
        axios.get(`${process.env.REACT_APP_URL}/blog/single/${id}`).then(({ data }) => {
          
            dispatch(blogObj(data.single))
        })
    } catch (error) {
        console.log(error)

    }
}

