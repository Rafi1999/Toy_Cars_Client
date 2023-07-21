import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      console.log(user);
    })
.catch(err=>console.log(err.message))
  }
    const navLink = <>
        <li className="font-semibold"><NavLink to='/' className={({ isActive, isPending }) =>
                      isActive
                        ? "text-blue-600  hover:bg-transparent"
                        : isPending
                        ? "pending"
                        : "text-lg bg-none md:text-sm hover:text-red-500 hover:bg-transparent"
                    }>Home</NavLink></li>
        <li className="font-semibold"><NavLink to='/allToys' className={({ isActive, isPending }) =>
                      isActive
                        ? "text-blue-600  hover:bg-transparent"
                        : isPending
                        ? "pending"
                        : "text-lg  bg-none md:text-sm hover:text-red-500  hover:bg-transparent"
                    }>All Toys</NavLink></li>
        {user?
      <div className="grid md:flex gap-2 items-center"><NavLink to='/myToys' className={({ isActive, isPending }) =>
                      isActive
                        ? "text-blue-600 font-semibold  hover:bg-transparent"
                        : isPending
                        ? "pending"
                        : "text-lg ml-4 bg-none font-semibold md:text-sm hover:text-red-500  hover:bg-transparent"
                    }>My Toys</NavLink>
      <NavLink to='/addToy'  className={({ isActive, isPending }) =>
                      isActive
                        ? "text-blue-600 font-semibold hover:bg-transparent"
                        : isPending
                        ? "pending"
                        : "text-lg ml-4  bg-none font-semibold md:text-sm hover:text-red-500 hover:bg-transparent"
                    }>Add Toys</NavLink></div>
 : "" }
        <li className="font-semibold"><NavLink to='/blogs' className={({ isActive, isPending }) =>
                      isActive
                        ? "text-blue-600  hover:bg-transparent"
                        : isPending
                        ? "pending"
                        : "text-lg md:text-sm bg-none hover:text-red-500 hover:bg-transparent"
                    }>Blogs</NavLink></li>
    </>
    return (
        <div className="navbar bg-slate-50 h-24 mb-4 pb-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>
    <Link to='/' className="btn btn-link  normal-case no-underline text-xl hover:no-underline">
        <img src={"https://i.postimg.cc/WbMYdykK/240-F-327633365-r-Os-ENFcj8-E5-Zlq-HQp-RRc7-KLJYAUozx4g.jpg"} className="w-[30px] md:w-[70px] rounded-lg md:mr-2" alt="" />
        <p className="text-sm md:text-xl text-blue-900">Toy Cars Store</p>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex hover:bg-none">
    <ul className="menu menu-horizontal pt-7 px-1 hover:bg-none">
      {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    {user? <div className="flex gap-3">
    <img title={user.displayName} className='relative rounded-full w-10 h-10 md:w-12 md:h-12' src={user.photoURL}></img>
      <Link onClick={handleLogOut} className="btn btn-primary">Log Out</Link>
    </div> : <Link to='/login'  onClick={handleLogOut} className="btn btn-primary">Login</Link> }
  </div>
</div>
    );
};

export default Navbar;