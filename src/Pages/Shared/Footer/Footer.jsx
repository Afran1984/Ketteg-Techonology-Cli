import imagefooter from '../../../../public/Image/ketteg-tecnology.png';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='bg-base-200 p-3'>
        <nav className="footer bg-base-200 text-base-content">
            <aside>
                <img className='h-[150px] w-[180px]' src={imagefooter} alt="" />
                <p>
                KETTEG Tecnology Ltd.
                <br />
                 <small> &copy; 2022 copyright.
                </small>
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <NavLink to='/about'><a className="link link-hover">About us</a></NavLink> 
               <NavLink to='/contact'><a className="link link-hover">Contact</a></NavLink> 
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </nav>
        <p className='text-center'>Mozaffer Nagar Residential Area, Polytechnic, Chittagong 4209</p>
        </footer>
    );
};

export default Footer;