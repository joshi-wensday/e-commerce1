import { Link } from "react-router-dom";

import './nav-bar.styles.scss';
import { ReactComponent as YinYangLogo } from '../../assets/images/nav-icon.svg';

import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context.jsx';

import { signOutUser } from '../../utils/firebase/firebase.utils.js';

const NavBar = () => {
    const { currentUser } = useContext(UserContext);

    return (
      <div className='NavBar'> 
        <Link to="/" >
          <YinYangLogo className='Logo' />
        </Link>
        <div className='links-container'>
          <Link to="/test-categories" className='NavText'>Test Categories</Link>
          {
            currentUser 
            ? 
            <span className='NavText SignOut' onClick={signOutUser}>SIGN OUT NOOOB</span>
            :
            <Link to="/auth" className='NavText'>Sign In</Link>
          }
          <Link to="/contact" className='NavText'>-Contact-</Link>
        </div>
      </div>
    );
};

export default NavBar;