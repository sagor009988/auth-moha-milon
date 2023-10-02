import { useContext } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
 const {user ,loading}=useContext(AuthContex)
 if(loading){
    return 
 }
 if(user){
    return children
 }
 
    return <Navigate to={'/login'}></Navigate>;
};

export default PrivateRoute;