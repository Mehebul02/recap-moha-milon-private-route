import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
const Register = () => {
    // const [passwordError,setPasswordError] =useState('')
    // const [success,setSuccess] =useState('')
    const {createUsers} = useContext(AuthContext)
    const handleRegister=e=>{
        e.preventDefault()
        const email =e.target.email.value
        const password =e.target.password.value
        console.log(email,password)
        // setPasswordError('')
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            toast.error("Please Valid Email Address")
            return;
        }
       else if(password.length < 6){
         
            toast.error("Password should be at least 6 characters")
            return;
        }
        else if(!/[A-Z]/.test(password)){
            toast.error("Password Should have at last one uppercase character.")
            return;
        }
       
        createUsers(email,password)
        .then(result =>{
            const logged =result.user
            // setSuccess(logged)
            console.log(logged)
            e.target.reset()
            toast.success('REGISTRATION SUCCESS')
        })
        .catch(error =>{
            console.log(error)
            // setPasswordError(error.message)
            toast.error("Email Already In Use")
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
              
              </div>
              <div className="form-control mt-6">
                <button className="bg-primary p-2 rounded-lg text-xl text-white">Registration</button>
                <Toaster />
                
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