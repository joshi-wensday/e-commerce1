import './cart-dropdown.styles.scss';

import Button from '../button/button.component'

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartDropdown = () => {
    const { cartOpen } = useContext(CartContext);
    return (
        <div className={`cart-dropdown-container ${cartOpen ? 'show' : 'hide'}`}>
            <div className='cart-items' />
            <Button buttonType='default'>
                Check Out
            </Button>
        </div>
    )
};

export default CartDropdown;