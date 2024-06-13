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
        <Link to="/shop" className='NavText'>Shop</Link>
        <Link to="/about" className='NavText'>About</Link>
        <Link to="/contact" className='NavText'>Contact</Link>
      </div>
    );
};

export default NavBar;