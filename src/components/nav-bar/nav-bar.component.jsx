import { Link } from "react-router-dom";

import './nav-bar.styles.scss';
import { ReactComponent as YinYangLogo } from '../../assets/images/nav-icon.svg';

const NavBar = () => {
    return (
      <div className='NavBar'> 
        <Link to="/" >
          <YinYangLogo className='Logo' />
        </Link>
        <div className='links-container'>
          <Link to="/test-categories" className='NavText'>Test Categories</Link>
          <Link to="/sign-in" className='NavText'>Sign In</Link>
          <Link to="/contact" className='NavText'>Contact</Link>
        </div>
      </div>
    );
};

export default NavBar;