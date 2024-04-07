import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
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
        
        
      </ul>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    );
};

export default Navbar;