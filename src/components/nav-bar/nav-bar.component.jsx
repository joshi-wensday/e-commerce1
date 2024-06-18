import { Link } from "react-router-dom";

import navIcon from '../../assets/images/nav-icon.png';
import './nav-bar.styles.scss';

const NavBar = () => {
    return (
      <div className='NavBar'> 
        <Link to="/" >
          <div className='NavIcon' style={{
            backgroundImage: `url(${navIcon})`
          }}/>
        </Link>
        <div className='links-container'>
          <Link to="/test-categories" className='NavText'>Test Categories</Link>
          <Link to="/about" className='NavText'>About</Link>
          <Link to="/contact" className='NavText'>Contact</Link>
        </div>
      </div>
    );
};

export default NavBar;