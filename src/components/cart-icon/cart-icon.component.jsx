import './cart-icon.styles.scss';

import {ReactComponent as ShoppingIcon} from '../../assets/images/shopping-bag_45-45.svg';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { cartCount, setCartOpen } = useContext(CartContext);

    const OpenCartFunction = () => {
        setCartOpen();
    }

    return (
        <div className='cart-icon-container' onMouseDown={OpenCartFunction}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;