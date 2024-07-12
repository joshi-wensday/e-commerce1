import { Link } from "react-router-dom";

import './nav-bar.styles.scss';
import { ReactComponent as YinYangLogo } from '../../assets/images/nav-icon.svg';

import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context.jsx';
import { CartContext } from "../../contexts/cart.context.jsx";

import { signOutUser } from '../../utils/firebase/firebase.utils.js';

import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from "../cart-dropdown/cart-dropdown.component.jsx";

const NavBar = () => {
    const { currentUser } = useContext(UserContext);
    const { cartOpen } = useContext(CartContext);

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
          <Link to="/shop" className='NavText'>Shop</Link>
          <CartIcon />
        </div>
        {cartOpen && <CartDropdown />}
      </div>
    );
};

export default NavBar;