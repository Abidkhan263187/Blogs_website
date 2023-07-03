import axios from 'axios'
import { delData, storeData, whoLogin } from './action';
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

    dispatch(delData([]))
try {
    await axios.post(`http://localhost:5000/user/login`,loginDetails,{
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(({data})=>{
        console.log(data.token);
        localStorage.setItem('token', JSON.stringify(data.token));
        dispatch(whoLogin(loginDetails.email))
        alert("login successful")
        
    })
    // console.log("before get data")
    // dispatch(getdata());
    // console.log("after get data")
} catch (error) {
    alert("login failed")
    console.log("error while login",error)
}
}