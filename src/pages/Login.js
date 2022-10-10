import React from 'react';
import auth from '../firebase.init';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    return (
        <div className='border border-secondary w-50 mx-auto my-5 py-5 text-center bg-success'>
            <h1 className='mb-5 text-warning'>Login</h1>
               <button onClick={()=> signInWithFacebook()} type="button" class="btn btn-light mb-5">Login With Facebook</button> <br />
               <button onClick={()=> signInWithGoogle()} type="button" class="btn btn-light mb-5">Login With Google</button>
        </div>
    );
};

export default Login;