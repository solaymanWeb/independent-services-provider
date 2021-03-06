import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useLocation, Navigate} from "react-router-dom";
import auth from '../../firebase.init';


const RequireAuth = ({children}) => {
  const [user, loading, error] = useAuthState(auth);
    let location = useLocation();
    if(loading){
      return <div>loading</div>
    }
    if(!user){
    return <Navigate to ='/login' state={{from: location}} replace></Navigate>
  }
  
    return children;
};

export default RequireAuth;