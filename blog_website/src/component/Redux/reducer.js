import {  DELOLD, HOME_BLOG_ARRAY, LOAD, LOGIN, LOGIN_LOAD, SINGLE_BLOG, STORE_DATA, WHO } from "./actionTypes"


const initialState = {
    blogArray: [],
    homeBlogArray: [],
    who: '',
    load: false,
    single:{},
    login:false,
    login_loading: false

}

export const reducer = (store = initialState, action) => {
    switch (action.type) {
        case STORE_DATA: {
            return { ...store, blogArray: action.payload }
        }
        case DELOLD: {
            return { ...store, blogArray: action.payload }
        }
        case WHO: {
            return { ...store, who: action.payload }
        }
        case HOME_BLOG_ARRAY: {
            return { ...store, homeBlogArray: action.payload }
        }
        case LOAD: {
            return { ...store, load: action.payload }
        }
        case SINGLE_BLOG:{
            return {...store,single: action.payload}
        }
        case LOGIN:{
            return {...store,login:action.payload}
        }
        case LOGIN_LOAD:{
            return{...store,login_loading:action.payload}
        }
        default: return store
    }
}