import axios from 'axios'
import { blogObj, delData, homeBlogsArray, setLoading, storeData, whoLogin } from './action';

export const fetchData = () => async (dispatch) => {
    let token = JSON.parse(localStorage.getItem("token"))
    try {
         await axios.get('http://localhost:5000/blog/dashboard', {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        }).then(({data})=>{
            dispatch(storeData(data.blogList))
        })
    } catch (error) {
        console.log(error);
    }
};

export const homeBlogs = () => async (dispatch) => {
    let token = JSON.parse(localStorage.getItem("token"))
    try {
         await axios.get('http://localhost:5000/blog', {
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
        await axios.post(`http://localhost:5000/user/signup`, user, {
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
        await axios.post(`http://localhost:5000/blog/create`, blog, {
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
        await axios.post(`http://localhost:5000/user/login`, loginDetails, {
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

export const logOut=()=> async (dispatch)=>{
try {
    axios.post(`http://localhost:5000/user/logout`,{
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(({data})=>{
      
        localStorage.setItem('token', JSON.stringify(data.token));
        dispatch(whoLogin(""))
        // dispatch(fetchData());
    })
} catch (error) {
    
}
}

export const handleDeleteEmployee = (id) => async(dispatch)=> {
    let token = JSON.parse(localStorage.getItem("token"))

    try {
        await axios.delete(`http://localhost:5000/blog/delete/${id}`, {
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

export const updateBlogObj = (id, obj,token) => async (dispatch) => {
  
    try {
      await axios.patch(`http://localhost:5000/blog/edit/${id}`, obj, {
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

  export const singleBlogObj=(id)=> async (dispatch)=>{
    console.log(id)
try {
    axios.get(`http://localhost:5000/blog/single/${id}`).then(({data})=>{
        console.log(data)
        dispatch(blogObj(data.single))
    })
} catch (error) {
    console.log(error)
}
  }
  
