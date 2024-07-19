import './cart-dropdown.styles.scss';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component'

import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items-container'>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
            </div>
            <Button buttonType='default' onClick={() => navigate('/checkout')}>
                Check Out
            </Button>
        </div>
    )
};

export default CartDropdown;