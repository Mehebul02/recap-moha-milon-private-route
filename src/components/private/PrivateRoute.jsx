import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({children}) => {
    const {users,loading} =useContext(AuthContext)
    if(loading){
        return <div className="text-center mt-10"><span className="loading  loading-bars loading-lg"></span></div>
    }
    if(users){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;