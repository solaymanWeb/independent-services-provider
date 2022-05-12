
import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
const [email, setEmail]=useState('');
const [password, setPassword]=useState('');
const [signInWithGoogle]=useSignInWithGoogle(auth);
const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
] = useSignInWithEmailAndPassword(auth);
const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
  auth
);
const navigate=useNavigate()
const location = useLocation()

let from = location.state?.from?.pathname || "/";

const handleEmail=event=>{
  setEmail(event.target.value)
}
const handlePassword =event=>{
  setPassword(event.target.value)
}
const createSignIn =event =>{
  event.preventDefault();
  signInWithEmailAndPassword(email, password)
  // navigate(from, { replace: true });
}

const handleGoogleSignIn =()=>{
  signInWithGoogle();
  
}

if(user){
  navigate(from)
}
const forgetPassword= async ()=>{
  await sendPasswordResetEmail(email);
     alert('Sent email');
}



    return (
        <div>
            <div className='reg-form'>
                <h5>Log in</h5>
                <div>
                  <button onClick={handleGoogleSignIn}>
                    Google sign-in
                  </button>
                </div>
            <Form onSubmit={createSignIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
          </Form.Group>
          <div>
            <p>{error?.message}</p>
          </div>
          <Button className='submit-btn' variant="primary" type="submit">
            Log in
          </Button>
        </Form>

          <div className='forgetPassword'>
          <Button  onClick={forgetPassword}>Forget password</Button>
          </div>
            </div>
            <h6>New use?  <Link to='/register'>please registerd</Link> </h6>
        </div>
    );
};

export default Login;