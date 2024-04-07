import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Navbar = () => {
  const {users,userSignOut} = useContext(AuthContext)
  const handleSignOut =()=>{
    userSignOut()
    .then()
    .catch(error =>{
      console.log(error)
    })

  }
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
   <Link to='/'> <a className="btn btn-ghost text-2xl">Moha Milon </a></Link>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <ul className="flex gap-12 mr-28 ">
       <NavLink to='/' className={({isActive})=>isActive?'border-b-2 border-red-600 text-xl text-black':''}> <li className="text-xl text-black">Home</li></NavLink>
       <NavLink to='/login' className={({isActive})=>isActive?'border-b-2 border-red-600 text-xl text-black':''}> <li className="text-xl text-black">Login</li></NavLink>
       <NavLink to='/register' className={({isActive})=>isActive?'border-b-2 border-red-600 text-xl text-black':''}> <li className="text-xl text-black">Register</li></NavLink>
       <NavLink to='/orders' className={({isActive})=>isActive?'border-b-2 border-red-600 text-xl text-black':''}> <li className="text-xl text-black">Orders</li></NavLink>
      {users &&
       <>
       <NavLink to='/profile' className={({isActive})=>isActive?'border-b-2 border-red-600 text-xl text-black':''}> <li className="text-xl text-black">Profile</li></NavLink>
       <NavLink to='/deshboard' className={({isActive})=>isActive?'border-b-2 border-red-600 text-xl text-black':''}> <li className="text-xl text-black">Deshboard</li></NavLink>
       </>
       }
        
      
      </ul>
      
    </div>
    {/* <div>
    {
          users && <p>{users.email}</p>
        }
      <button className="btn">Log Out</button>
    </div> */}
    
         {users ? <>
          <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Alif" src={users.photoURL} />
          </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
    
        
        <li onClick={handleSignOut}><a>Logout</a></li>
      </ul>
    </div>
         </>
         : <Link to='/login'><button className="btn">Login</button></Link>
         }
      
        
  </div>
</div>
    );
};

export default Navbar;