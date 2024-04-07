import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const {createUsers} = useContext(AuthContext)
    const handleRegister=e=>{
        e.preventDefault()
        const email =e.target.email.value
        const password =e.target.password.value
        console.log(email,password)
        createUsers(email,password)
        .then(result =>{
            console.log(result.user)
            e.target.reset()
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
             <form onSubmit={handleRegister}>
             <div className="form-control">
                <h1 className="text-2xl font-semibold text-orange-400">Registration Now!</h1>
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered "  />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered " required />
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
                <button className="bg-primary p-2 rounded-lg text-xl text-white">Registration</button>
                <p>Already have account?Please<Link to='/login'><button className='btn btn-link'>Login</button></Link></p>
              </div>
             </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;