
import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
const [email, setEmail]=useState('');
const [password, setPassword]=useState('');
const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
] = useSignInWithEmailAndPassword(auth);
const navigate = useNavigate();
// if(user){
//   navigate('/')
// }
if(user?.email){
  navigate('/checkout')
}

const handleEmail = event =>{
  setEmail(event.target.value)
}
const handlePassword = event =>{
  setPassword(event.target.value)
}
 
const signIn =(event)=>{

  signInWithEmailAndPassword(email, password)
  event.preventDefault();

}

    return (
        <div>
            <div className='reg-form'>
                <h5>Log in</h5>
            <Form onSubmit={signIn}>
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
            </div>
            <h6>New use?  <Link to='/register'>please registerd</Link> </h6>
        </div>
    );
};

export default Login;