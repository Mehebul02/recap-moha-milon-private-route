import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {loginEmail,googleSing,loading} = useContext(AuthContext)
    const navigate = useNavigate()
    if(loading){
        return <div className="text-center mt-10"><span className="loading  loading-bars loading-lg"></span></div>
    }
    const handleLogin =e=>{
        e.preventDefault()
        const email =e.target.email.value
        const password =e.target.password.value
        console.log(email,password)
        loginEmail(email,password)
        .then(result =>{
            console.log(result.user)
            toast.success('Login Successfully')
            e.target.reset()
          navigate('/orders')
        })
        .catch(error =>{
            console.log(error)
        })
    }
    // google Sing 
    const handleGoogleSing =()=>{
        googleSing()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen  bg-base-200">
        <div className="hero-content w-full">
          
          <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
            <div className="card-body ">
             <form onSubmit={handleLogin}>
             <div className="form-control">
             <h1 className="text-2xl font-semibold text-orange-400">Login Now!</h1>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              <button className="bg-primary p-2 rounded-lg text-xl text-white">Login</button>
              
              <Toaster />
              </div>
             </form>
             <button onClick={handleGoogleSing} className="bg-yellow-600 mt-5 p-2 text-xl rounded-lg text-white ">Google</button>
              <p>New here?please<Link to='/register'><button className="btn btn-link">Register</button></Link></p>
            </div>
          </div>
        </div>
      </div> 
    );
};

export default Login;