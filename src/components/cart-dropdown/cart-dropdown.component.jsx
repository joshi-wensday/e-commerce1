import './cart-dropdown.styles.scss';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component'

import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
    const { cartItems, setCartOpen } = useContext(CartContext);

    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate('/checkout')
        setCartOpen(false);
    };

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
            <Button buttonType='default' onClick={goToCheckoutHandler}>
                Check Out
            </Button>
        </div>
    )
};

export default CartDropdown;