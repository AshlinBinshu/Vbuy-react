import {Link} from "react-router-dom"
const Navbar = () => {
  return(
    <nav className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-5
     fixed top-0 left-0 right-0 shadow md gap-1 sm:gap-0 z-30 bg-white">
    {/* Logo and site */}
     <div className="flex justify-between items-center">
        {/* Add image later */}
        <img src="/logo.png" alt="logo" className="w-[30px]"/>
        <Link to="/" className="font-bold text-3xl">Vbuy</Link>
     </div>

     {/* list of other tabs */}
     <ul className="flex gap-6 text-lg font font-semibold text-gray-400 ml-8 sm:ml-0">
        <Link to="/" className="hover:text-black cursor-pointer sm:p-2">About</Link>
        <Link to="/" className="hover:text-black cursor-pointer sm:p-2">Contact</Link>
        <Link to="/" className="hover:text-black cursor-pointer sm:p-2">Login</Link>
        <Link to="/" className="hover:text-black cursor-pointer sm:p-2">Sign up</Link>
     </ul>
    </nav>
  ); 
}

export default Navbar