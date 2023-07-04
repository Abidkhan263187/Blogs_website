import axios from 'axios'
import { delData, homeBlogsArray, storeData, whoLogin } from './action';
var   token=JSON.parse(localStorage.getItem("token"))
// export const getdata = () => async (dispatch) => {
//     try {
//       const response = await fetch('http://localhost:5000/blog', {
//         headers: {
//           Authorization: 'Bearer ' + token,
//           'Content-Type': 'application/json'
//         }
//       });
//       const data = await response.json();
//     //   console.log(data);
//       dispatch(storeData(data.blogList));
//     } catch (error) {
//       console.log(error);
//     }
//   };

export const homeBlogs=()=>async(dispatch)=>{
try {
    const response = await axios('http://localhost:5000/blog', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(({data})=>{
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
     console.log("error while signup",error)
    }
}

export const postBlog = (blog) => async (dispatch) => {
    try {
        await axios.post(`http://localhost:5000/blog/create`, blog, {
            headers: {
                "Authorization": "Bearer " + token,
                'Content-Type': 'application/json'
            }
        })
        // dispatch(getdata());
    } catch (error) {
        console.log(error)
    }
}
export const loginUser=(loginDetails) =>async (dispatch)=>{
console.log(loginDetails)
try {
    await axios.post(`http://localhost:5000/user/login`,loginDetails,{
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(({data})=>{
        console.log(data.token);
        localStorage.setItem('token', JSON.stringify(data.token));
        dispatch(whoLogin(loginDetails.email))
      
        
    })
  
} catch (error) {
    alert("login failed")
    console.log("error while login",error)
}
}

export const handleDeleteEmployee = async (id) => {
    console.log(id)
    try {
       await axios.delete(`http://localhost:5000/blog/delete/${id}`, {
        headers: {
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
        }
      }).then(({data})=>{
        console.log(data);
      })
      console.log("deleted")
    } catch (error) {
      console.log('Error deleting employee:', error);
    }
  };