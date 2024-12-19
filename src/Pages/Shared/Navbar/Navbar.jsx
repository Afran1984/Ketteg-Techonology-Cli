import { Link } from 'react-router-dom';
import imageIcon from '../../../../public/Image/ketteg-tecnology.png';
import { TfiEmail } from "react-icons/tfi";



const Navbar = () => {


    const navOption = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/services">Our Services</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/about">Abouts</Link></li>
    </>
    return (
        <div className="navbar bg-[#f3f3f3]">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabIndex={0}
        className="menu menu-sm dropdown-content gap-3 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {navOption}
                </ul>
                </div>
                {/* image KATTEG Tecnology */}
                <img className='w-[80px] h-[80px]' src={imageIcon} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-3 px-1">
                {navOption}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn"><TfiEmail size={28} color="#081d3b" /></a>
            </div>
        </div>
    );
};

export default Navbar;