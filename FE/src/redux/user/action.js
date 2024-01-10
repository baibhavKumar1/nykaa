import { LOGIN_USER_ERROR, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTER_USER_ERROR, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./actionType";
import axios from 'axios';

const url='https://tame-rose-cod-gown.cyclic.app'

export const RegisterUser=(data)=>async(dispatch)=>{
    dispatch({type:REGISTER_USER_REQUEST})
    await axios.post(`${url}/api/register`,data)
    .then((res)=>{
        dispatch({type:REGISTER_USER_SUCCESS,payload:res})
        console.log(res)
    })
    .catch((err)=>{
        dispatch({type:REGISTER_USER_ERROR})
        console.log(err)
    })
}
export const LoginUser=(data)=>async(dispatch)=>{
    dispatch({type:LOGIN_USER_REQUEST})
    await axios.post(`${url}/api/login`,data)
    .then((res)=>{
        dispatch({type:LOGIN_USER_SUCCESS,payload:res})
        console.log(res)
    })
    .catch((err)=>{
        dispatch({type:LOGIN_USER_ERROR})
        console.log(err)
    })
}
