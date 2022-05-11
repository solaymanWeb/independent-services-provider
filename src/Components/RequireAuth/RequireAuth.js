import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {useLocation, Navigate} from "react-router-dom";
import auth from '../../firebase.init';


const RequireAuth = ({children}) => {
  const [user] = useSignInWithEmailAndPassword(auth);
    let location = useLocation();
    if(!auth.user){
    return <Navigate to ='/login' state={{from: location}} replace></Navigate>
  }
  // else if(user?.email){
  //   <Navigate  to ="/checkout"></Navigate>
  // }
    
    return children;
};

export default RequireAuth;