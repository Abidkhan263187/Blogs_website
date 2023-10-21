import React from 'react';
import jwt_decode from 'jwt-decode';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { login, login_load } from '../Redux/action';



export const GoogleLoginButton = () => {
    const dispatch=useDispatch();
 const client_id=process.env.REACT_APP_GOOGLE_ID
    return (
        <GoogleOAuthProvider clientId={client_id}>
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    var decoded = jwt_decode(credentialResponse.credential);
                    const decodeName=decoded.given_name
                    if(decodeName){
                        sessionStorage.setItem('who', JSON.stringify(decodeName));
                        dispatch(login(true))
                        dispatch(login_load(false))
                        window.location.href='/'
                    }
                  
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </GoogleOAuthProvider>
    );
};
